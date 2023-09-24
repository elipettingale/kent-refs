import { ThemeContext } from "@/pages/_app";
import { useContext } from "react";

export default function useThemeOptions() {
  const themeContext = useContext(ThemeContext);
  return [themeContext?.options];
}
