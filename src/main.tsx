import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

// Dynamic browser tab favicon management for Image 3 (White geometric emblem)
if (typeof window !== "undefined") {
  const updateTabFavicon = () => {
    const isDark = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
    const tabIcon = document.querySelector<HTMLLinkElement>("link#tab-icon");
    if (tabIcon) {
      tabIcon.href = isDark ? "/favicon-tab-dark.png" : "/favicon-tab-light.png";
    }
  };
  updateTabFavicon();
  try {
    window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", updateTabFavicon);
  } catch (_) {}
}

createRoot(document.getElementById("root")!).render(<App />);

