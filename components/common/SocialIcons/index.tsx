import {
  faFacebookF,
  faInstagram,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const styles = require("./index.module.css");

interface Props {
  twitterUrl?: string;
  facebookUrl?: string;
  instagramUrl?: string;
}

export default function SocialIcons({
  twitterUrl,
  facebookUrl,
  instagramUrl,
}: Props) {
  return (
    <ul className={styles.SocialIcons}>
      {twitterUrl && (
        <li style={{ "--color": "#1cb7eb" } as React.CSSProperties}>
          <a href={twitterUrl} target="_blank">
            <FontAwesomeIcon icon={faXTwitter} />
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
      {instagramUrl && (
        <li style={{ "--color": "#dd2a7b" } as React.CSSProperties}>
          <a href={instagramUrl} target="_blank">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
        </li>
      )}
    </ul>
  );
}
