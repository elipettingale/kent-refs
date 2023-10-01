import {
  faFacebook,
  faFacebookF,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const styles = require("./index.module.css");

interface Props {
  twitterUrl?: string;
  facebookUrl?: string;
}

export default function SocialIcons({ twitterUrl, facebookUrl }: Props) {
  return (
    <ul className={styles.SocialIcons}>
      {twitterUrl && (
        <li style={{ "--color": "#1cb7eb" } as React.CSSProperties}>
          <a href={twitterUrl} target="_blank">
            <FontAwesomeIcon icon={faTwitter} />
          </a>
        </li>
      )}
      {facebookUrl && (
        <li style={{ "--color": "#4267b2" } as React.CSSProperties}>
          <a href={facebookUrl} target="_blank">
            <FontAwesomeIcon icon={faFacebookF} />
          </a>
        </li>
      )}
    </ul>
  );
}
