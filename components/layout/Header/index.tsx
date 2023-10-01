import useThemeOptions from "@/src/hooks/useThemeOptions";
import TopBar from "../TopBar";

const styles = require("./index.module.css");

export default function Header() {
  const [theme] = useThemeOptions();

  return (
    <div className={styles.Header}>
      <TopBar />
    </div>
  );
}
