import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#17141F",
        paper: "#FAFAF8",
        bone: "#F1EFE9",
        line: "#DED8CB",
        aubergine: "#3B234A",
        violet: "#6B21A8",
        signal: "#B8FF5C",
        ember: "#FF6A3D",
      },
      boxShadow: {
        soft: "0 24px 80px rgba(23, 20, 31, 0.12)",
      },
    },
  },
  plugins: [],
};

export default config;
