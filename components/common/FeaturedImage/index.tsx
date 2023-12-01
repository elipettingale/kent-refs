import Image from "next/image";

export default function FeaturedImage({
  mediaItem: { sourceUrl, altText, mediaDetails },
}: any) {
  return (
    <div className="relative">
      <Image
        src={sourceUrl}
        alt={altText}
        width={mediaDetails.width}
        height={mediaDetails.height}
      />
    </div>
  );
}
