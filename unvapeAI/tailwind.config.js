/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}", // This covers app/(tabs), app/onboarding, etc.
    "./components/**/*.{js,jsx,ts,tsx}", // For all custom components
  
  ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        // Base theme
        background: "#000000",
        foreground: "#FFFFFF",
        primary: "#FFD700",         // Yellow (main accent)

        // UI Elements
        card: "#111111",            // Card background
        "card-border": "#222222",   // Borders, input background
        "input-bg": "#222222",
        "muted-text": "#A3A3A3",

        // Functional
        destructive: "#DC2626",          // Emergency button
        "destructive-border": "#991B1B", // Destructive outlines
        success: "#10B981",              // Green success

        // Hover states
        "hover-dark": "#333333",
        "hover-primary": "#E6C200",
      },
    },
  },
  plugins: [],
};
