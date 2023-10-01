import SocialIcons from "@/components/common/SocialIcons";
import useThemeOptions from "@/src/hooks/useThemeOptions";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const styles = require("./index.module.css");

export default function TopBar() {
  const [theme] = useThemeOptions();

  return (
    <div className={styles.TopBar}>
      <div className={styles.TopBar__Inner}>
        <SocialIcons {...theme.social} />
        <div className={styles.TopBar__Search}>
          <FontAwesomeIcon icon={faSearch} />
        </div>
      </div>
    </div>
  );
}
