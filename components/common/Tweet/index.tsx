import { Url } from "next/dist/shared/lib/router/router";
import styles from "./index.module.css";
import Link from "next/link";

interface Props {
  date: string;
  link: Url;
  theme: "grey" | "blue";
  children: any;
}

export default function Tweet({ date, link, theme, children }: Props) {
  return (
    <Link href={link}>
      <div className={`${styles.Tweet} ${styles[`Tweet--${theme}`]}`}>
        <div className={styles.Top}>{children}</div>
        <div className={styles.Bottom}>
          <p>{date}</p>
        </div>
      </div>
    </Link>
  );
}
