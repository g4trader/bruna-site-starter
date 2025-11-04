
import type { Config } from "tailwindcss";
const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          dark: "#0F172A",
          ink: "#1E293B",
          gold: "#C9A227",
          line: "#E2E8F0",
        },
      },
      fontFamily: {
        serif: ["ui-serif","Georgia","serif"],
        sans: ["ui-sans-serif","system-ui","-apple-system","Segoe UI","Roboto"],
      },
      borderRadius: { xl: "0.75rem", "2xl": "1rem" },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
export default config;
