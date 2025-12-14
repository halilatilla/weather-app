import styled, { keyframes, css } from "styled-components";
import { RetroTheme } from "../../styles/themes";

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(-5px); }
  to { opacity: 1; transform: translateY(0); }
`;

export const SwitcherContainer = styled.div`
  position: fixed;
  top: 20px;
  right: 20px;
  z-index: 200;

  @media (max-width: 650px) {
    top: 10px;
    right: 10px;
  }
`;

export const SwitcherButton = styled.button<{ $theme: RetroTheme }>`
  background: ${({ $theme }) => $theme.colors.buttonBackground};
  color: ${({ $theme }) => $theme.colors.buttonText};
  font-family: ${({ $theme }) => $theme.fonts.primary};
  font-size: 8px;
  padding: 8px 12px;
  cursor: pointer;
  border: 3px solid;
  border-color: ${({ $theme }) =>
    `${$theme.colors.buttonBorderLight} ${$theme.colors.buttonBorderDark} ${$theme.colors.buttonBorderDark} ${$theme.colors.buttonBorderLight}`};
  display: flex;
  align-items: center;
  gap: 8px;
  white-space: nowrap;
  transition: all 0.1s;

  ${({ $theme }) =>
    $theme.name === "msdos" &&
    css`
      box-shadow: 0 0 10px ${$theme.colors.glowColor};
    `}

  &:hover {
    background: ${({ $theme }) => $theme.colors.buttonHover};
  }

  &:active {
    border-color: ${({ $theme }) =>
      `${$theme.colors.buttonBorderDark} ${$theme.colors.buttonBorderLight} ${$theme.colors.buttonBorderLight} ${$theme.colors.buttonBorderDark}`};
  }

  @media (max-width: 650px) {
    font-size: 6px;
    padding: 6px 8px;
  }
`;

export const ThemeIcon = styled.span`
  font-size: 12px;

  @media (max-width: 650px) {
    font-size: 10px;
  }
`;

export const DropdownMenu = styled.div<{
  $theme: RetroTheme;
  $isOpen: boolean;
}>`
  position: absolute;
  top: 100%;
  right: 0;
  margin-top: 4px;
  background: ${({ $theme }) => $theme.colors.windowBackground};
  border: 3px solid;
  border-color: ${({ $theme }) =>
    `${$theme.colors.windowBorderLight} ${$theme.colors.windowBorderDark} ${$theme.colors.windowBorderDark} ${$theme.colors.windowBorderLight}`};
  box-shadow: ${({ $theme }) => $theme.effects.windowShadow};
  min-width: 180px;
  display: ${({ $isOpen }) => ($isOpen ? "block" : "none")};
  animation: ${fadeIn} 0.15s ease-out;

  ${({ $theme }) =>
    $theme.name === "msdos" &&
    css`
      border: 2px solid ${$theme.colors.windowBorder};
      box-shadow: 0 0 20px ${$theme.colors.glowColor};
    `}
`;

export const DropdownTitle = styled.div<{ $theme: RetroTheme }>`
  background: ${({ $theme }) =>
    `linear-gradient(90deg, ${$theme.colors.titleBarStart}, ${$theme.colors.titleBarEnd})`};
  color: ${({ $theme }) => $theme.colors.titleBarText};
  font-family: ${({ $theme }) => $theme.fonts.primary};
  font-size: 8px;
  padding: 4px 8px;
  text-transform: uppercase;

  ${({ $theme }) =>
    $theme.name === "msdos" &&
    css`
      background: ${$theme.colors.titleBarStart};
      border-bottom: 1px solid ${$theme.colors.primary};
      text-shadow: 0 0 5px ${$theme.colors.glowColor};
    `}

  ${({ $theme }) =>
    $theme.name === "macOS9" &&
    css`
      background: linear-gradient(
        180deg,
        ${$theme.colors.titleBarStart} 0%,
        ${$theme.colors.titleBarEnd} 100%
      );
      text-align: center;
    `}
`;

export const ThemeOption = styled.button<{
  $theme: RetroTheme;
  $isActive: boolean;
}>`
  width: 100%;
  background: ${({ $theme, $isActive }) =>
    $isActive ? $theme.colors.primary : $theme.colors.contentBackground};
  color: ${({ $theme, $isActive }) =>
    $isActive ? $theme.colors.titleBarText : $theme.colors.text};
  font-family: ${({ $theme }) => $theme.fonts.primary};
  font-size: 8px;
  padding: 10px 12px;
  cursor: pointer;
  border: none;
  text-align: left;
  display: flex;
  align-items: center;
  gap: 10px;
  transition: all 0.1s;

  ${({ $theme }) =>
    $theme.name === "msdos" &&
    css`
      border-bottom: 1px solid ${$theme.colors.windowBorderDark};

      &:last-child {
        border-bottom: none;
      }
    `}

  &:hover {
    background: ${({ $theme, $isActive }) =>
      $isActive ? $theme.colors.primary : $theme.colors.buttonHover};

    ${({ $theme }) =>
      $theme.name === "msdos" &&
      css`
        background: ${$theme.colors.buttonHover};
        text-shadow: 0 0 5px ${$theme.colors.glowColor};
      `}
  }

  @media (max-width: 650px) {
    font-size: 7px;
    padding: 8px 10px;
  }
`;

export const ThemePreview = styled.div<{ $previewTheme: RetroTheme }>`
  width: 24px;
  height: 18px;
  background: ${({ $previewTheme }) => $previewTheme.colors.windowBackground};
  border: 2px solid;
  border-color: ${({ $previewTheme }) =>
    `${$previewTheme.colors.windowBorderLight} ${$previewTheme.colors.windowBorderDark} ${$previewTheme.colors.windowBorderDark} ${$previewTheme.colors.windowBorderLight}`};
  position: relative;
  flex-shrink: 0;

  /* Mini title bar */
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 5px;
    background: ${({ $previewTheme }) =>
      `linear-gradient(90deg, ${$previewTheme.colors.titleBarStart}, ${$previewTheme.colors.titleBarEnd})`};
  }

  ${({ $previewTheme }) =>
    $previewTheme.name === "msdos" &&
    css`
      border-color: ${$previewTheme.colors.primary};
      box-shadow: 0 0 5px ${$previewTheme.colors.glowColor};
    `}
`;

export const ThemeName = styled.span`
  flex: 1;
`;

export const ActiveIndicator = styled.span<{ $theme: RetroTheme }>`
  font-size: 10px;
  color: ${({ $theme }) =>
    $theme.name === "msdos" ? $theme.colors.primary : "inherit"};

  ${({ $theme }) =>
    $theme.name === "msdos" &&
    css`
      text-shadow: 0 0 5px ${$theme.colors.glowColor};
    `}
`;
