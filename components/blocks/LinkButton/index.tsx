import Link from "next/link";
import { HTMLAttributeAnchorTarget } from "react";
import styles from "./index.module.css";

interface Props {
  url: string;
  title: string;
  target: HTMLAttributeAnchorTarget | undefined;
}

export default function LinkButton({ url, title, target }: Props) {
  return (
    <Link className={styles.Button} href={url} target={target}>
      {title}
    </Link>
  );
}
