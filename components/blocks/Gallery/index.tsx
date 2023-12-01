import Image from "@/components/common/Image";
import { MediaType } from "@/src/lib/types";
import styles from "./index.module.css";

interface Props {
  images: MediaType[];
}

export default function Gallery({ images }: Props) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {images.map((image) => (
        <div key={image.id} className={styles.Item}>
          <Image
            src={image.sourceUrl}
            alt={image.altText}
            width={image.mediaDetails.width}
            height={image.mediaDetails.height}
          />
        </div>
      ))}
    </div>
  );
}
