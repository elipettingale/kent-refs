import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  safelist: ["fill-blue", "fill-grey-800", "fill-white"],
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
      "blue-400": "#4975b1",
      "blue-500": "#1b539e",
      "blue-600": "#16427e",
      slate: "#191f32",
      "slate-100": "#757984",
      "slate-200": "#5e6270",
      "slate-300": "#474c5b",
      "slate-400": "#303547",
      "slate-500": "#191f32",
      "slate-600": "#171c2d",
      "slate-700": "#141928",
      "slate-800": "#121623",
      "slate-900": "#0f131e",
      grey: "#9c9c9c",
      "grey-100": "#ebebeb",
      "grey-200": "#d7d7d7",
      "grey-300": "#c4c4c4",
      "grey-400": "#b0b0b0",
      "grey-500": "#9c9c9c",
      "grey-600": "#7d7d7d",
      "grey-700": "#5e5e5e",
      "grey-800": "#3e3e3e",
      "grey-900": "#1f1f1f",
    },
  },
  plugins: [],
};

export default config;
