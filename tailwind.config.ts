import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#26CE23",
        secondary: "#26CE23",
        neutral1: "#E2DCDC",
        neutral2: "#8C8484",
        neutral3: "#585252",
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
