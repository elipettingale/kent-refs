import { MediaItemType } from "@/src/lib/types";
import styles from "./index.module.css";

interface Props {
  backgroundImage: MediaItemType;
  titleTop: string;
  titleBottom: string;
}

export default function Banner({
  backgroundImage,
  titleTop,
  titleBottom,
}: Props) {
  return (
    <div className="h-[100vh] max-h-[600px]">
      <div
        className="h-full bg-cover"
        style={{
          backgroundImage: `url(${backgroundImage.mediaItemUrl})`,
        }}
      >
        <div className={styles.Overlay}>
          <div className={styles.Content}>
            <p className="text-4xl font-roboto uppercase text-blue font-bold">
              {titleTop}
            </p>
            <p className="text-6xl font-roboto uppercase text-white font-bold">
              {titleBottom}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
