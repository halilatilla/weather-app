"use client";

import { useEffect } from "react";
import { useRetroTheme } from "../../context/ThemeContext";
import { createGlobalStyle } from "styled-components";
import { RetroTheme } from "../../styles/themes";

// Global style component that sets CSS variables
const ThemeStyles = createGlobalStyle<{ $theme: RetroTheme }>`
  :root {
    /* Window colors */
    --window-background: ${({ $theme }) => $theme.colors.windowBackground};
    --window-border: ${({ $theme }) => $theme.colors.windowBorder};
    --window-border-light: ${({ $theme }) => $theme.colors.windowBorderLight};
    --window-border-dark: ${({ $theme }) => $theme.colors.windowBorderDark};
    --window-border-darker: ${({ $theme }) => $theme.colors.windowBorderDarker};
    
    /* Title bar */
    --title-bar-start: ${({ $theme }) => $theme.colors.titleBarStart};
    --title-bar-end: ${({ $theme }) => $theme.colors.titleBarEnd};
    --title-bar-text: ${({ $theme }) => $theme.colors.titleBarText};
    
    /* Content */
    --content-background: ${({ $theme }) => $theme.colors.contentBackground};
    --text: ${({ $theme }) => $theme.colors.text};
    --text-secondary: ${({ $theme }) => $theme.colors.textSecondary};
    --text-accent: ${({ $theme }) => $theme.colors.textAccent};
    
    /* Buttons */
    --button-background: ${({ $theme }) => $theme.colors.buttonBackground};
    --button-border-light: ${({ $theme }) => $theme.colors.buttonBorderLight};
    --button-border-dark: ${({ $theme }) => $theme.colors.buttonBorderDark};
    --button-text: ${({ $theme }) => $theme.colors.buttonText};
    --button-hover: ${({ $theme }) => $theme.colors.buttonHover};
    
    /* Input */
    --input-background: ${({ $theme }) => $theme.colors.inputBackground};
    --input-border: ${({ $theme }) => $theme.colors.inputBorder};
    --input-text: ${({ $theme }) => $theme.colors.inputText};
    --input-placeholder: ${({ $theme }) => $theme.colors.inputPlaceholder};
    
    /* Accents */
    --primary: ${({ $theme }) => $theme.colors.primary};
    --secondary: ${({ $theme }) => $theme.colors.secondary};
    --accent: ${({ $theme }) => $theme.colors.accent};
    --error: ${({ $theme }) => $theme.colors.error};
    
    /* Special */
    --scanline-color: ${({ $theme }) => $theme.colors.scanlineColor};
    --glow-color: ${({ $theme }) => $theme.colors.glowColor};
    
    /* Effects */
    --window-shadow: ${({ $theme }) => $theme.effects.windowShadow};
    --text-shadow: ${({ $theme }) => $theme.effects.textShadow};
    
    /* Fonts */
    --font-primary: ${({ $theme }) => $theme.fonts.primary};
    --font-secondary: ${({ $theme }) => $theme.fonts.secondary};
    
    /* Theme flags */
    --is-msdos: ${({ $theme }) => ($theme.name === "msdos" ? "1" : "0")};
    --is-macos9: ${({ $theme }) => ($theme.name === "macOS9" ? "1" : "0")};
  }
`;

export default function ThemeVariables() {
  const { currentTheme } = useRetroTheme();

  return <ThemeStyles $theme={currentTheme} />;
}
