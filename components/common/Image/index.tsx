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
  if (fill) {
    return (
      <NextImage
        src={src}
        alt={alt}
        fill
        style={{ objectFit: "cover" }}
        {...rest}
      />
    );
  }

  return (
    <NextImage src={src} alt={alt} width={width} height={height} {...rest} />
  );
}
