import Image from "next/image";

export default function FeaturedImage({
  mediaItem: { mediaItemUrl, altText, mediaDetails },
}: any) {
  return (
    <div className="relative">
      <Image
        src={mediaItemUrl}
        alt={altText}
        width={mediaDetails.width}
        height={mediaDetails.height}
      />
    </div>
  );
}
