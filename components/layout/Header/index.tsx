import useThemeOptions from "@/src/hooks/useThemeOptions";
import SocialBar from "../SocialBar";

const styles = require("./index.module.scss");

export default function Header() {
  const [theme] = useThemeOptions();

  return (
    <div className={styles.Header}>
      <SocialBar {...theme.social} />
    </div>
  );
}
