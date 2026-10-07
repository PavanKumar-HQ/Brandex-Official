import React from "react";
import { Button, type ButtonProps } from "@/components/ui/button";
import { useCalBooking, DEFAULT_CAL_LINK, DEFAULT_CAL_NAMESPACE } from "@/hooks/useCalBooking";

export interface CalBookingButtonProps extends ButtonProps {
  calLink?: string;
  namespace?: string;
  config?: Record<string, unknown>;
  onBeforeOpen?: () => void;
}

export const CalBookingButton = React.forwardRef<HTMLButtonElement, CalBookingButtonProps>(
  (
    {
      calLink = DEFAULT_CAL_LINK,
      namespace = DEFAULT_CAL_NAMESPACE,
      config,
      onBeforeOpen,
      onClick,
      children,
      ...props
    },
    ref
  ) => {
    const { openBooking } = useCalBooking({ calLink, namespace, config });

    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
      onBeforeOpen?.();
      onClick?.(e);
      openBooking();
    };

    return (
      <Button
        ref={ref}
        onClick={handleClick}
        {...props}
      >
        {children}
      </Button>
    );
  }
);

CalBookingButton.displayName = "CalBookingButton";

export default CalBookingButton;
