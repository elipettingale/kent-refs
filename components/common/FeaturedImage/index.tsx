import Image from "next/image";
const styles = require("./index.module.scss");

export default function FeaturedImage({
  mediaItem: { mediaItemUrl, altText, mediaDetails },
}: any) {
  return (
    <div className={styles.FeaturedImage}>
      <Image
        src={mediaItemUrl}
        alt={altText}
        width={mediaDetails.width}
        height={mediaDetails.height}
      />
    </div>
  );
}
