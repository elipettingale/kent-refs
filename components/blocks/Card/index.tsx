import Image from "@/components/common/Image";
import { ImageType, LinkType } from "@/src/lib/types";
import Link from "next/link";
import styles from "./index.module.css";

interface Props {
  picture: ImageType;
  title: string;
  link: LinkType;
}

export default function Card({ picture, title, link }: Props) {
  return (
    <Link
      href={link.url ?? "#"}
      title={link.title ?? null}
      target={link.target ?? null}
      className="block"
    >
      <div className={styles.Wrapper}>
        <div className={styles.Picture}>
          {picture && (
            <Image className="m-0" src={picture.url} alt={picture.alt} fill />
          )}
        </div>
        <div className={styles.Title}>{title}</div>
      </div>
    </Link>
  );
}
