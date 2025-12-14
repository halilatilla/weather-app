export const theme = {
  colors: {
    // Classic Windows 95 colors with neon accents
    primary: "#00FF00", // Neon green
    secondary: "#FF00FF", // Hot magenta
    accent: "#00FFFF", // Cyan
    warning: "#FFFF00", // Yellow
    background: "#000080", // Classic Windows blue
    cardBackground: "#C0C0C0", // Windows gray
    itemBackground: "#DFDFDF",
    text: "#000000",
    textLight: "#00FF00",
    error: "#FF0000",
    // Windows 95 3D effect colors
    highlight: "#FFFFFF",
    shadow: "#808080",
    darkShadow: "#404040",
    // CRT screen colors
    crtGreen: "#33FF33",
    crtAmber: "#FFB000",
    neonPink: "#FF1493",
    neonBlue: "#00BFFF",
  },
  fonts: {
    pixel: "'Press Start 2P', cursive",
    vt323: "'VT323', monospace",
    body: "'VT323', monospace",
  },
  breakpoints: {
    mobile: "480px",
    tablet: "768px",
    desktop: "1024px",
  },
};
export type ThemeType = typeof theme;
