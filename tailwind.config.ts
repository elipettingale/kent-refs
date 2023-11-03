import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        roboto: ["var(--font-roboto)"],
      },
    },
    colors: {
      white: "#ffffff",
      black: "#000000",
      blue: "#1b539e",
      slate: "#1f273f",
      "slate-200": "#7d859a",
      "slate-300": "#687085",
      "slate-400": "#2b3249",
      "slate-500": "#1f273f",
      "slate-600": "#171e36",
    },
  },
  plugins: [],
};
export default config;
