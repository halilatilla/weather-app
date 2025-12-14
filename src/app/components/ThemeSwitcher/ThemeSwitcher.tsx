"use client";

import { useState, useRef, useEffect } from "react";
import { useRetroTheme } from "../../context/ThemeContext";
import { themes, themeOrder, ThemeName } from "../../styles/themes";
import {
  SwitcherContainer,
  SwitcherButton,
  ThemeIcon,
  DropdownMenu,
  DropdownTitle,
  ThemeOption,
  ThemePreview,
  ThemeName as ThemeNameStyled,
  ActiveIndicator,
} from "./ThemeSwitcher.styles";

// Theme icons
const themeIcons: Record<ThemeName, string> = {
  win95: "🪟",
  win98: "💾",
  macOS9: "🍎",
  msdos: "💻",
};

export default function ThemeSwitcher() {
  const { currentTheme, themeName, setTheme } = useRetroTheme();
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Close on escape key
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, []);

  const handleThemeSelect = (name: ThemeName) => {
    setTheme(name);
    setIsOpen(false);
  };

  return (
    <SwitcherContainer ref={containerRef}>
      <SwitcherButton
        $theme={currentTheme}
        onClick={() => setIsOpen(!isOpen)}
        title="Change theme"
      >
        <ThemeIcon>{themeIcons[themeName]}</ThemeIcon>
        THEME
      </SwitcherButton>

      <DropdownMenu $theme={currentTheme} $isOpen={isOpen}>
        <DropdownTitle $theme={currentTheme}>🎨 SELECT THEME</DropdownTitle>
        {themeOrder.map((name) => {
          const theme = themes[name];
          const isActive = name === themeName;

          return (
            <ThemeOption
              key={name}
              $theme={currentTheme}
              $isActive={isActive}
              onClick={() => handleThemeSelect(name)}
            >
              <ThemePreview $previewTheme={theme} />
              <ThemeNameStyled>{theme.displayName}</ThemeNameStyled>
              {isActive && (
                <ActiveIndicator $theme={currentTheme}>✓</ActiveIndicator>
              )}
            </ThemeOption>
          );
        })}
      </DropdownMenu>
    </SwitcherContainer>
  );
}
