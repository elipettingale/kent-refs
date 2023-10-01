import { ThemeContext } from "@/pages/_app";
import { useContext } from "react";
import { ThemeOptionsType } from "../lib/types";

export default function useThemeOptions(): [ThemeOptionsType] {
  const themeContext = useContext(ThemeContext);
  return [themeContext?.options];
}
