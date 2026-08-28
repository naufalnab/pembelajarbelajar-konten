"use client";

import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

const THEME_KEY = "pb-content-theme";

function applyTheme(isDark: boolean) {
  document.documentElement.dataset.theme = isDark ? "dark" : "light";
}

export function ThemeToggle() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const frame = window.requestAnimationFrame(() => {
      const savedTheme = window.localStorage.getItem(THEME_KEY);
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      const nextTheme = savedTheme ? savedTheme === "dark" : prefersDark;

      applyTheme(nextTheme);
      setIsDark(nextTheme);
    });

    return () => window.cancelAnimationFrame(frame);
  }, []);

  function toggleTheme() {
    const nextTheme = !isDark;

    applyTheme(nextTheme);
    window.localStorage.setItem(THEME_KEY, nextTheme ? "dark" : "light");
    setIsDark(nextTheme);
  }

  return (
    <button
      type="button"
      className="theme-toggle"
      onClick={toggleTheme}
      aria-label={isDark ? "Aktifkan mode terang" : "Aktifkan mode gelap"}
      aria-pressed={isDark}
      title={isDark ? "Mode terang" : "Mode gelap"}
    >
      {isDark ? <Sun size={17} aria-hidden="true" /> : <Moon size={17} aria-hidden="true" />}
    </button>
  );
}
