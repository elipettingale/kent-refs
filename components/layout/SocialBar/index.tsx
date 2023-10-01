const styles = require("./index.module.css");

interface Props {
  twitterUrl?: string;
  facebookUrl?: string;
}

export default function SocialBar({ twitterUrl, facebookUrl }: Props) {
  return (
    <div className={styles.SocialBar}>
      <div className={styles.SocialBar__Inner}>
        <ul>
          {twitterUrl && (
            <li style={{ "--color": "#1cb7eb" } as React.CSSProperties}>
              <a href={twitterUrl} target="_blank">
                T
              </a>
            </li>
          )}
          {facebookUrl && (
            <li style={{ "--color": "#4267b2" } as React.CSSProperties}>
              <a href={facebookUrl} target="_blank">
                F
              </a>
            </li>
          )}
        </ul>
      </div>
    </div>
  );
}
