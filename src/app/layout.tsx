"use client";

import { ThemeProvider } from "styled-components";
import { theme } from "./styles/theme";
import GlobalStyles from "./styles/globalStyles";
import StyledComponentsRegistry from "../lib/registry";
import { RetroThemeProvider } from "./context/ThemeContext";
import ThemeVariables from "./components/ThemeVariables";
import ThemeSwitcher from "./components/ThemeSwitcher";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Press+Start+2P&family=VT323&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <StyledComponentsRegistry>
          <ThemeProvider theme={theme}>
            <RetroThemeProvider>
              <GlobalStyles theme={theme} />
              <ThemeVariables />
              <ThemeSwitcher />
              {children}
            </RetroThemeProvider>
          </ThemeProvider>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
