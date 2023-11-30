import { MediaType } from "@/src/lib/types";
import { default as NextImage } from "next/image";

interface Props {
  src: string;
  alt: string;
  height?: number;
  width?: number;
  className?: string;
  fill?: true | null;
}

export default function Image({
  src,
  alt,
  width,
  height,
  fill = null,
  ...rest
}: Props) {
  let trueSrc = src;

  if (process.env.NEXT_PUBLIC_IS_DOCKER) {
    trueSrc = src.replace("localhost:8001", "wordpress");
  }

  if (fill) {
    return (
      <NextImage
        src={trueSrc}
        alt={alt}
        fill
        style={{ objectFit: "cover" }}
        {...rest}
      />
    );
  }

  return (
    <NextImage
      src={trueSrc}
      alt={alt}
      width={width}
      height={height}
      {...rest}
    />
  );
}
