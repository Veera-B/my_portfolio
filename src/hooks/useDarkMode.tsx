import { useEffect, useState } from "react";

export default function useDarkMode() {
  //  get the theme from local storage
  const [theme, setTheme] = useState(() => {
    if (typeof window !== "undefined") {
      return localStorage.theme || "light";
    }
    return "light";
  });

  useEffect(() => {
    const root = window.document.documentElement;
    
    if (theme === "dark") {
      root.classList.add("dark");
      localStorage.theme = "dark";
    } else {
      root.classList.remove("dark");
      localStorage.theme = "light";
    }
  }, [theme]);

  // theme handler
  const toggleTheme = () => {
   
    setTheme((prev: "light" | "dark") => (prev === "light" ? "dark" : "light"));
  };

  return { theme, toggleTheme };
}