import plugin from "tailwindcss/plugin";
import { liquidGlassTheme } from "./theme";

const liquidGlass = plugin(
  ({ addComponents, addUtilities, matchUtilities, theme }) => {
    // Base glass surface utility
    addUtilities({
      ".glass-surface": {
        "backdrop-filter": "blur(16px) saturate(180%)",
        "-webkit-backdrop-filter": "blur(16px) saturate(180%)",
      },
      ".glass-surface-sm": {
        "backdrop-filter": "blur(8px) saturate(150%)",
        "-webkit-backdrop-filter": "blur(8px) saturate(150%)",
      },
      ".glass-surface-lg": {
        "backdrop-filter": "blur(24px) saturate(200%)",
        "-webkit-backdrop-filter": "blur(24px) saturate(200%)",
      },
      ".glass-surface-xl": {
        "backdrop-filter": "blur(40px) saturate(200%)",
        "-webkit-backdrop-filter": "blur(40px) saturate(200%)",
      },
    });

    // Specular shine overlay
    addUtilities({
      ".glass-shine": {
        position: "relative",
        overflow: "hidden",
        "&::after": {
          content: '""',
          position: "absolute",
          inset: "0",
          "border-radius": "inherit",
          background:
            "linear-gradient(135deg, rgba(255,255,255,0.25) 0%, transparent 40%, transparent 60%, rgba(255,255,255,0.05) 100%)",
          "pointer-events": "none",
        },
      },
      ".glass-shine-subtle": {
        position: "relative",
        overflow: "hidden",
        "&::after": {
          content: '""',
          position: "absolute",
          inset: "0",
          "border-radius": "inherit",
          background:
            "linear-gradient(135deg, rgba(255,255,255,0.12) 0%, transparent 50%)",
          "pointer-events": "none",
        },
      },
    });

    // Accessibility: reduced transparency fallback
    addUtilities({
      "@media (prefers-reduced-transparency: reduce)": {
        ".glass-surface, .glass-surface-sm, .glass-surface-lg, .glass-surface-xl":
          {
            "backdrop-filter": "none",
            "-webkit-backdrop-filter": "none",
            background: "rgba(30, 30, 30, 0.95)",
          },
      },
    });

    // Component presets
    addComponents({
      ".glass-card": {
        "background-color": theme("colors.glass.light"),
        "backdrop-filter": "blur(16px) saturate(180%)",
        "-webkit-backdrop-filter": "blur(16px) saturate(180%)",
        "border-radius": theme("borderRadius.glass-lg"),
        border: `1px solid ${theme("colors.glass-border.DEFAULT")}`,
        "box-shadow": theme("boxShadow.glass"),
        padding: theme("spacing.6"),
      },
      ".glass-card-elevated": {
        "background-color": theme("colors.glass.strong"),
        "backdrop-filter": "blur(24px) saturate(200%)",
        "-webkit-backdrop-filter": "blur(24px) saturate(200%)",
        "border-radius": theme("borderRadius.glass-lg"),
        border: `1px solid ${theme("colors.glass-border.strong")}`,
        "box-shadow": theme("boxShadow.glass-elevated"),
        padding: theme("spacing.6"),
      },
      ".glass-btn": {
        display: "inline-flex",
        "align-items": "center",
        "justify-content": "center",
        gap: theme("spacing.2"),
        "padding-left": theme("spacing.5"),
        "padding-right": theme("spacing.5"),
        "padding-top": theme("spacing.2.5"),
        "padding-bottom": theme("spacing.2.5"),
        "border-radius": theme("borderRadius.glass"),
        "font-weight": "500",
        "background-color": theme("colors.glass.light"),
        "backdrop-filter": "blur(16px)",
        "-webkit-backdrop-filter": "blur(16px)",
        border: `1px solid ${theme("colors.glass-border.subtle")}`,
        "box-shadow": theme("boxShadow.glass"),
        transition: "all 300ms cubic-bezier(0.4, 0, 0.2, 1)",
        "&:hover": {
          transform: "translateY(-2px)",
          "box-shadow": theme("boxShadow.glass-lg"),
        },
        "&:active": {
          transform: "scale(0.95)",
        },
      },
      ".glass-btn-secondary": {
        display: "inline-flex",
        "align-items": "center",
        "justify-content": "center",
        gap: theme("spacing.2"),
        "padding-left": theme("spacing.5"),
        "padding-right": theme("spacing.5"),
        "padding-top": theme("spacing.2.5"),
        "padding-bottom": theme("spacing.2.5"),
        "border-radius": theme("borderRadius.glass"),
        "font-weight": "500",
        "background-color": theme("colors.glass.subtle"),
        "backdrop-filter": "blur(16px)",
        "-webkit-backdrop-filter": "blur(16px)",
        border: `1px solid ${theme("colors.glass-border.subtle")}`,
        "box-shadow": theme("boxShadow.glass"),
        transition: "all 300ms cubic-bezier(0.4, 0, 0.2, 1)",
        "&:hover": {
          transform: "translateY(-2px)",
          "background-color": theme("colors.glass.medium"),
        },
        "&:active": {
          transform: "scale(0.95)",
        },
      },
      ".glass-btn-pill": {
        display: "inline-flex",
        "align-items": "center",
        "justify-content": "center",
        gap: theme("spacing.2"),
        "padding-left": theme("spacing.5"),
        "padding-right": theme("spacing.5"),
        "padding-top": theme("spacing.2.5"),
        "padding-bottom": theme("spacing.2.5"),
        "border-radius": "9999px",
        "font-size": theme("fontSize.sm"),
        "font-weight": "500",
        "background-color": theme("colors.glass.subtle"),
        "backdrop-filter": "blur(16px)",
        "-webkit-backdrop-filter": "blur(16px)",
        border: `1px solid ${theme("colors.glass-border.subtle")}`,
        "box-shadow": theme("boxShadow.glass"),
        transition: "all 300ms cubic-bezier(0.4, 0, 0.2, 1)",
        "&:hover": {
          transform: "translateY(-2px)",
        },
        "&:active": {
          transform: "scale(0.95)",
        },
      },
      ".glass-nav": {
        position: "fixed",
        top: "0",
        left: "0",
        right: "0",
        "z-index": "50",
        "background-color": theme("colors.glass.medium"),
        "backdrop-filter": "blur(24px) saturate(180%)",
        "-webkit-backdrop-filter": "blur(24px) saturate(180%)",
        "border-bottom": `1px solid ${theme("colors.glass-border.subtle")}`,
      },
      ".glass-modal": {
        "background-color": theme("colors.glass.light"),
        "backdrop-filter": "blur(40px) saturate(180%)",
        "-webkit-backdrop-filter": "blur(40px) saturate(180%)",
        "border-radius": `${theme("borderRadius.glass-xl")} ${theme("borderRadius.glass-xl")} 0 0`,
        border: `1px solid ${theme("colors.glass-border.DEFAULT")}`,
        "box-shadow":
          "0 -8px 32px rgba(31, 38, 135, 0.2)",
      },
      ".glass-input": {
        width: "100%",
        "padding-left": theme("spacing.4"),
        "padding-right": theme("spacing.4"),
        "padding-top": theme("spacing.3"),
        "padding-bottom": theme("spacing.3"),
        "border-radius": theme("borderRadius.glass-sm"),
        "background-color": theme("colors.glass.subtle"),
        "backdrop-filter": "blur(16px)",
        "-webkit-backdrop-filter": "blur(16px)",
        border: `1px solid ${theme("colors.glass-border.subtle")}`,
        outline: "none",
        transition: "all 200ms cubic-bezier(0.4, 0, 0.2, 1)",
        "&::placeholder": {
          color: "rgba(255, 255, 255, 0.5)",
        },
        "&:focus": {
          "border-color": theme("colors.glass-border.strong"),
          "background-color": theme("colors.glass.medium"),
        },
      },
      ".glass-segment": {
        display: "inline-flex",
        "border-radius": theme("borderRadius.glass-sm"),
        "background-color": theme("colors.glass.subtle"),
        "backdrop-filter": "blur(16px)",
        "-webkit-backdrop-filter": "blur(16px)",
        border: `1px solid ${theme("colors.glass-border.subtle")}`,
        padding: theme("spacing.1"),
      },
      ".glass-segment-item": {
        "padding-left": theme("spacing.4"),
        "padding-right": theme("spacing.4"),
        "padding-top": theme("spacing.2"),
        "padding-bottom": theme("spacing.2"),
        "border-radius": theme("borderRadius.glass-sm"),
        "font-size": theme("fontSize.sm"),
        "font-weight": "500",
        transition: "all 200ms cubic-bezier(0.4, 0, 0.2, 1)",
      },
      ".glass-segment-item-active": {
        "background-color": theme("colors.glass.light"),
        "box-shadow": theme("boxShadow.glass"),
      },
    });
  },
  {
    theme: {
      extend: {
        ...liquidGlassTheme,
      },
    },
  }
);

export default liquidGlass;
export { liquidGlassTheme } from "./theme";
