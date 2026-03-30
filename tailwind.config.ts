import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#7EE673",
        secondary: "#9D63D5",
        neutral1: "#8E919C",
        neutral2: "#AAADC4",
        neutral3: "#D6EEFF",
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
