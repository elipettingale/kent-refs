import { MediaType } from "@/src/lib/types";
import styles from "./index.module.css";

interface Props {
  backgroundImage: MediaType;
  titleTop: string;
  titleBottom: string;
}

export default function FullBanner({
  backgroundImage,
  titleTop,
  titleBottom,
}: Props) {
  return (
    <div className="h-[100vh] max-h-[600px]">
      <div
        className="h-full bg-cover"
        style={{
          backgroundImage: `url(${backgroundImage.sourceUrl})`,
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
            <img
              className={styles.Cutout}
              src="https://kent-refs-cms.elliotpettingale.co.uk/wp-content/uploads/2023/11/cutout.png"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
