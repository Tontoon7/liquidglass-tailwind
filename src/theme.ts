export const liquidGlassTheme = {
  colors: {
    glass: {
      light: "rgba(255, 255, 255, 0.15)",
      medium: "rgba(255, 255, 255, 0.10)",
      subtle: "rgba(255, 255, 255, 0.08)",
      strong: "rgba(255, 255, 255, 0.25)",
      dark: "rgba(0, 0, 0, 0.15)",
      "dark-medium": "rgba(0, 0, 0, 0.25)",
      "dark-strong": "rgba(0, 0, 0, 0.35)",
    },
    "glass-border": {
      DEFAULT: "rgba(255, 255, 255, 0.20)",
      subtle: "rgba(255, 255, 255, 0.10)",
      strong: "rgba(255, 255, 255, 0.30)",
    },
  },
  borderRadius: {
    "glass-sm": "12px",
    glass: "16px",
    "glass-lg": "24px",
    "glass-xl": "32px",
  },
  boxShadow: {
    glass: "0 8px 32px rgba(31, 38, 135, 0.15)",
    "glass-lg":
      "0 8px 32px rgba(31, 38, 135, 0.20), inset 0 4px 20px rgba(255, 255, 255, 0.15)",
    "glass-inset": "inset 0 1px 0 rgba(255, 255, 255, 0.20)",
    "glass-elevated":
      "0 16px 48px rgba(31, 38, 135, 0.25), inset 0 2px 12px rgba(255, 255, 255, 0.10)",
  },
} as const;

export type LiquidGlassTheme = typeof liquidGlassTheme;
