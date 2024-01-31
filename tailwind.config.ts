import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        navBG: "#319795",
        skillHighlight: "#00aed1",
        customRed: "#943629",
        navAccent: "#FFF",
        themeButton: "#D3D0CB",
        pageTitle: "#000",
      },
      height: {
        "22": "5rem", // Custom value as an example
      },
    },
  },
  plugins: [require("@tailwindcss/typography"), require("@tailwindcss/forms")],
};
export default config;
