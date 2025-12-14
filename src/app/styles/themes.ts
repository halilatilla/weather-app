// Theme configurations for the retro theme switcher

export type ThemeName = "win95" | "win98" | "macOS9" | "msdos";

export interface RetroTheme {
  name: ThemeName;
  displayName: string;
  colors: {
    // Window colors
    windowBackground: string;
    windowBorder: string;
    windowBorderLight: string;
    windowBorderDark: string;
    windowBorderDarker: string;
    // Title bar
    titleBarStart: string;
    titleBarEnd: string;
    titleBarText: string;
    // Content
    contentBackground: string;
    text: string;
    textSecondary: string;
    textAccent: string;
    // Buttons
    buttonBackground: string;
    buttonBorderLight: string;
    buttonBorderDark: string;
    buttonText: string;
    buttonHover: string;
    // Input
    inputBackground: string;
    inputBorder: string;
    inputText: string;
    inputPlaceholder: string;
    // Accents
    primary: string;
    secondary: string;
    accent: string;
    error: string;
    // Special
    scanlineColor: string;
    glowColor: string;
  };
  fonts: {
    primary: string;
    secondary: string;
  };
  effects: {
    scanlines: boolean;
    crtFlicker: boolean;
    windowShadow: string;
    textShadow: string;
  };
}

// Windows 95 Theme (Default)
export const win95Theme: RetroTheme = {
  name: "win95",
  displayName: "Windows 95",
  colors: {
    windowBackground: "#c0c0c0",
    windowBorder: "#c0c0c0",
    windowBorderLight: "#ffffff",
    windowBorderDark: "#808080",
    windowBorderDarker: "#404040",
    titleBarStart: "#000080",
    titleBarEnd: "#1084d0",
    titleBarText: "#ffffff",
    contentBackground: "#c0c0c0",
    text: "#000000",
    textSecondary: "#808080",
    textAccent: "#000080",
    buttonBackground: "#c0c0c0",
    buttonBorderLight: "#ffffff",
    buttonBorderDark: "#808080",
    buttonText: "#000000",
    buttonHover: "#dfdfdf",
    inputBackground: "#ffffff",
    inputBorder: "#808080",
    inputText: "#000000",
    inputPlaceholder: "#808080",
    primary: "#000080",
    secondary: "#008080",
    accent: "#00ffff",
    error: "#ff0000",
    scanlineColor: "rgba(0, 0, 0, 0.1)",
    glowColor: "rgba(0, 255, 255, 0.3)",
  },
  fonts: {
    primary: "'Press Start 2P', cursive",
    secondary: "'VT323', monospace",
  },
  effects: {
    scanlines: true,
    crtFlicker: true,
    windowShadow: "4px 4px 0 rgba(0, 0, 0, 0.3)",
    textShadow: "2px 2px 0 #ff00ff, 4px 4px 0 #00ffff",
  },
};

// Windows 98 Theme
export const win98Theme: RetroTheme = {
  name: "win98",
  displayName: "Windows 98",
  colors: {
    windowBackground: "#d4d0c8",
    windowBorder: "#d4d0c8",
    windowBorderLight: "#ffffff",
    windowBorderDark: "#808080",
    windowBorderDarker: "#404040",
    titleBarStart: "#0a246a",
    titleBarEnd: "#a6caf0",
    titleBarText: "#ffffff",
    contentBackground: "#d4d0c8",
    text: "#000000",
    textSecondary: "#808080",
    textAccent: "#0a246a",
    buttonBackground: "#d4d0c8",
    buttonBorderLight: "#ffffff",
    buttonBorderDark: "#808080",
    buttonText: "#000000",
    buttonHover: "#e8e4dc",
    inputBackground: "#ffffff",
    inputBorder: "#7f9db9",
    inputText: "#000000",
    inputPlaceholder: "#808080",
    primary: "#0a246a",
    secondary: "#316ac5",
    accent: "#6699cc",
    error: "#cc0000",
    scanlineColor: "rgba(0, 0, 0, 0.05)",
    glowColor: "rgba(49, 106, 197, 0.3)",
  },
  fonts: {
    primary: "'Press Start 2P', cursive",
    secondary: "'VT323', monospace",
  },
  effects: {
    scanlines: true,
    crtFlicker: false,
    windowShadow: "2px 2px 8px rgba(0, 0, 0, 0.3)",
    textShadow: "1px 1px 0 #316ac5, 2px 2px 0 #6699cc",
  },
};

// Mac OS 9 Platinum Theme
export const macOS9Theme: RetroTheme = {
  name: "macOS9",
  displayName: "Mac OS 9",
  colors: {
    windowBackground: "#dddddd",
    windowBorder: "#dddddd",
    windowBorderLight: "#ffffff",
    windowBorderDark: "#888888",
    windowBorderDarker: "#555555",
    titleBarStart: "#cccccc",
    titleBarEnd: "#999999",
    titleBarText: "#000000",
    contentBackground: "#eeeeee",
    text: "#000000",
    textSecondary: "#666666",
    textAccent: "#0000cc",
    buttonBackground: "#dddddd",
    buttonBorderLight: "#ffffff",
    buttonBorderDark: "#888888",
    buttonText: "#000000",
    buttonHover: "#eeeeee",
    inputBackground: "#ffffff",
    inputBorder: "#888888",
    inputText: "#000000",
    inputPlaceholder: "#999999",
    primary: "#0000cc",
    secondary: "#663399",
    accent: "#9966cc",
    error: "#cc0000",
    scanlineColor: "rgba(0, 0, 0, 0.03)",
    glowColor: "rgba(102, 51, 153, 0.2)",
  },
  fonts: {
    primary: "'Press Start 2P', cursive",
    secondary: "'VT323', monospace",
  },
  effects: {
    scanlines: false,
    crtFlicker: false,
    windowShadow: "1px 1px 5px rgba(0, 0, 0, 0.4)",
    textShadow: "1px 1px 0 #9966cc",
  },
};

// MS-DOS Terminal Theme
export const msdosTheme: RetroTheme = {
  name: "msdos",
  displayName: "MS-DOS",
  colors: {
    windowBackground: "#000000",
    windowBorder: "#00ff00",
    windowBorderLight: "#00ff00",
    windowBorderDark: "#008800",
    windowBorderDarker: "#004400",
    titleBarStart: "#000000",
    titleBarEnd: "#002200",
    titleBarText: "#00ff00",
    contentBackground: "#000000",
    text: "#00ff00",
    textSecondary: "#008800",
    textAccent: "#00ff00",
    buttonBackground: "#000000",
    buttonBorderLight: "#00ff00",
    buttonBorderDark: "#008800",
    buttonText: "#00ff00",
    buttonHover: "#003300",
    inputBackground: "#001100",
    inputBorder: "#00ff00",
    inputText: "#00ff00",
    inputPlaceholder: "#008800",
    primary: "#00ff00",
    secondary: "#00cc00",
    accent: "#00ffff",
    error: "#ff0000",
    scanlineColor: "rgba(0, 255, 0, 0.03)",
    glowColor: "rgba(0, 255, 0, 0.5)",
  },
  fonts: {
    primary: "'Press Start 2P', cursive",
    secondary: "'VT323', monospace",
  },
  effects: {
    scanlines: true,
    crtFlicker: true,
    windowShadow: "0 0 20px rgba(0, 255, 0, 0.3)",
    textShadow: "0 0 10px #00ff00",
  },
};

export const themes: Record<ThemeName, RetroTheme> = {
  win95: win95Theme,
  win98: win98Theme,
  macOS9: macOS9Theme,
  msdos: msdosTheme,
};

export const themeOrder: ThemeName[] = ["win95", "win98", "macOS9", "msdos"];
