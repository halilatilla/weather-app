"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { ThemeName, RetroTheme, themes } from "../styles/themes";

interface ThemeContextType {
  currentTheme: RetroTheme;
  themeName: ThemeName;
  setTheme: (name: ThemeName) => void;
  cycleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

const THEME_STORAGE_KEY = "weather-app-theme";

export function RetroThemeProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [themeName, setThemeName] = useState<ThemeName>("win95");
  const [mounted, setMounted] = useState(false);

  // Load theme from localStorage on mount
  useEffect(() => {
    const savedTheme = localStorage.getItem(THEME_STORAGE_KEY) as ThemeName;
    if (savedTheme && themes[savedTheme]) {
      setThemeName(savedTheme);
    }
    setMounted(true);
  }, []);

  // Save theme to localStorage when it changes
  useEffect(() => {
    if (mounted) {
      localStorage.setItem(THEME_STORAGE_KEY, themeName);
    }
  }, [themeName, mounted]);

  const setTheme = (name: ThemeName) => {
    setThemeName(name);
  };

  const cycleTheme = () => {
    const themeNames: ThemeName[] = ["win95", "win98", "macOS9", "msdos"];
    const currentIndex = themeNames.indexOf(themeName);
    const nextIndex = (currentIndex + 1) % themeNames.length;
    setThemeName(themeNames[nextIndex]);
  };

  const currentTheme = themes[themeName];

  return (
    <ThemeContext.Provider
      value={{ currentTheme, themeName, setTheme, cycleTheme }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

export function useRetroTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useRetroTheme must be used within a RetroThemeProvider");
  }
  return context;
}
