import { MediaType } from "@/src/lib/types";
import { default as NextImage } from "next/image";

interface Props {
  mediaItem: MediaType;
  fill?: true | null;
}

export default function Image({ mediaItem, fill = null, ...rest }: Props) {
  let dockerSrc = mediaItem.mediaItemUrl
    .toString()
    .replace("localhost:8001", "wordpress");

  if (fill) {
    return (
      <NextImage
        src={dockerSrc}
        alt={mediaItem.altText}
        fill
        style={{ objectFit: "cover" }}
        {...rest}
      />
    );
  }

  return (
    <NextImage
      src={dockerSrc}
      alt={mediaItem.altText}
      width={mediaItem.mediaDetails.width}
      height={mediaItem.mediaDetails.height}
      {...rest}
    />
  );
}
