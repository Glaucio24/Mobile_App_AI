// constants/colors.ts

const Colors = {
  // Core colors
  black: "#000000",
  white: "#FFFFFF",
  yellow: "#FFD700", // Primary accent color (gold)

  // Grays for UI elements (light to dark)
  gray: {
    100: "#F5F5F5",
    200: "#E5E5E5",
    300: "#D4D4D4",
    400: "#A3A3A3", // Secondary text
    500: "#737373",
    600: "#525252",
    700: "#404040",
    800: "#262626",
    900: "#171717",
  },

  // Dark theme specific shades
  dark: {
    background: "#000000",   // Main background
    card: "#111111",         // Card background
    border: "#222222",       // Card border, input background
    hover: "#333333",        // Hover states or muted elements
  },

  // Functional colors
  red: {
    500: "#EF4444",
    600: "#DC2626", // Emergency/craving button
    700: "#B91C1C",
    800: "#991B1B", // Destructive border
    900: "#7F1D1D",
  },

  green: {
    500: "#10B981", // Online/positive indicator
  },
};

export default Colors;
