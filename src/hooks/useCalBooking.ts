import { useEffect, useCallback, useRef } from "react";
import { getCalApi } from "@calcom/embed-react";

export const DEFAULT_CAL_LINK = "brandex-xdnqyk/15min";
export const DEFAULT_CAL_NAMESPACE = "15min";
export const DEFAULT_CAL_CONFIG = {
  layout: "month_view",
  useSlotsViewOnSmallScreen: "true",
  hideEventTypeDetails: false,
  theme: "dark",
} as const;

export interface CalBookingOptions {
  calLink?: string;
  namespace?: string;
  config?: Record<string, unknown>;
}

// Module-level singleton promise to guarantee Cal API is loaded and configured only once per namespace
const calApiPromises: Record<string, Promise<unknown>> = {};

export function initializeCalApi(namespace = DEFAULT_CAL_NAMESPACE) {
  if (typeof window === "undefined") return Promise.resolve(null);

  if (!calApiPromises[namespace]) {
    calApiPromises[namespace] = (async () => {
      try {
        const cal = await getCalApi({ namespace });
        if (typeof cal === "function") {
          cal("ui", {
            theme: "dark",
            hideEventTypeDetails: false,
            layout: "month_view",
          });

          // Track analytics event on successful booking
          cal("on", {
            action: "bookingSuccessful",
            callback: (event: unknown) => {
              if (typeof window !== "undefined") {
                if (typeof (window as unknown as { gtag?: Function }).gtag === "function") {
                  (window as unknown as { gtag: Function }).gtag("event", "booking_completed", {
                    event_category: "Cal.com",
                    event_label: namespace,
                  });
                }
                window.dispatchEvent(
                  new CustomEvent("brandex:booking_completed", { detail: event })
                );
              }
            },
          });

          // Clean up any stale modal box or backdrop when iframe closes
          cal("on", {
            action: "__closeIframe",
            callback: () => {
              if (typeof document !== "undefined") {
                document.querySelectorAll("cal-modal-box").forEach((el) => {
                  el.setAttribute("state", "closed");
                  setTimeout(() => {
                    el.remove();
                  }, 150);
                });
              }
            },
          });
        }
        return cal;
      } catch (err) {
        console.error("Failed to initialize Cal.com embed API:", err);
        return null;
      }
    })();
  }

  return calApiPromises[namespace];
}

export function useCalBooking(defaultOptions?: CalBookingOptions) {
  const namespace = defaultOptions?.namespace || DEFAULT_CAL_NAMESPACE;
  const calLink = defaultOptions?.calLink || DEFAULT_CAL_LINK;
  const isOpening = useRef(false);

  // Initialize Cal.com API on component mount
  useEffect(() => {
    initializeCalApi(namespace);
  }, [namespace]);

  const openBooking = useCallback(
    async (overrideOptions?: CalBookingOptions) => {
      if (isOpening.current) return;
      isOpening.current = true;

      const targetNamespace = overrideOptions?.namespace || namespace;
      const targetLink = overrideOptions?.calLink || calLink;
      const targetConfig = {
        ...DEFAULT_CAL_CONFIG,
        ...(defaultOptions?.config || {}),
        ...(overrideOptions?.config || {}),
      };

      try {
        // Remove any old/stale modal elements before opening a new one
        if (typeof document !== "undefined") {
          document.querySelectorAll("cal-modal-box").forEach((el) => {
            if (el.getAttribute("state") === "closed" || !el.querySelector("iframe")) {
              el.remove();
            }
          });
        }

        const cal = (await initializeCalApi(targetNamespace)) as
          | ((action: string, options: unknown) => void)
          | null;

        if (cal && typeof cal === "function") {
          cal("modal", {
            calLink: targetLink,
            config: targetConfig,
          });

          // Dispatch booking opened event for analytics
          if (typeof window !== "undefined") {
            if (typeof (window as unknown as { gtag?: Function }).gtag === "function") {
              (window as unknown as { gtag: Function }).gtag("event", "booking_opened", {
                event_category: "Cal.com",
                event_label: targetLink,
              });
            }
          }
        }
      } catch (error) {
        console.error("Error opening Cal.com modal:", error);
      } finally {
        setTimeout(() => {
          isOpening.current = false;
        }, 1000);
      }
    },
    [namespace, calLink, defaultOptions?.config]
  );

  return {
    openBooking,
    openCal: openBooking,
    calLink,
    namespace,
  };
}
