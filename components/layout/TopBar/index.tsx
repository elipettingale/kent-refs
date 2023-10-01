import SocialIcons from "@/components/common/SocialIcons";
import useThemeOptions from "@/src/hooks/useThemeOptions";
import Search from "../Search";

const styles = require("./index.module.css");

export default function TopBar() {
  const [theme] = useThemeOptions();

  return (
    <div className={styles.TopBar}>
      <div className={styles.TopBar__Inner}>
        <SocialIcons {...theme.social} />
        <Search />
      </div>
    </div>
  );
}
