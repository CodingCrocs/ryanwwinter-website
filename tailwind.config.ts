import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#37C740",
        secondary: "#71B660",
        accent: "#60CDC1",
        dark: "#5A5A5A",
        neutral1: "#5A5A5A",
        neutral2: "#9A9A9A",
        neutral3: "#F3FBF4",
      },
      fontFamily: {
        sans: ["elza", "ui-sans-serif", "system-ui", "sans-serif"],
        display: ["manifold", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      borderRadius: {
        soft: "0.75rem",
        pill: "9999px",
      },
    },
  },
  plugins: [],
};

export default config;
