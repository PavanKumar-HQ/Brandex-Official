import { useEffect } from "react";

export default function ThemeToggle() {
  useEffect(() => {
    document.documentElement.classList.remove("dark");
    document.documentElement.classList.add("light");
    localStorage.setItem("theme", "light");
  }, []);

  return null;
}
