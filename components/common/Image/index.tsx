import { default as NextImage, ImageProps } from "next/image";

export default function Image({ src, ...rest }: ImageProps) {
  let dockerSrc = src.toString().replace("localhost:8001", "wordpress");
  return <NextImage src={dockerSrc} {...rest} />;
}
