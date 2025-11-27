/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
      colors: {
        // --- NEW GREEN THEME (Emerald) ---
        primary: {
          DEFAULT: "#059669", // Emerald-600 (Main buttons, text)
          light: "#A7F3D0", // Emerald-200 (Background blobs, light accents)
          dark: "#047857", // Emerald-700 (Hover states)
        },
        dark: "#111827", // Gray-900 (Main text)
      },
      // --- ANIMATIONS (Preserved) ---
      keyframes: {
        "bounce-in-up": {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "60%": { opacity: "1", transform: "translateY(-10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in-up": {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "pulse-slow": {
          "0%, 100%": { opacity: "0.3", transform: "scale(1)" },
          "50%": { opacity: "0.6", transform: "scale(1.05)" },
        },
      },
      animation: {
        "bounce-in": "bounce-in-up 1s ease-out forwards",
        "fade-in-up": "fade-in-up 0.8s ease-out forwards",
        "pulse-slow": "pulse-slow 6s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
