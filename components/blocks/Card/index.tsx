import Image from "@/components/common/Image";
import { ImageType, LinkType } from "@/src/lib/types";
import Link from "next/link";

interface Props {
  picture: ImageType;
  title: string;
  link: LinkType;
}

export default function Card({ picture, title, link }: Props) {
  return (
    <Link href={link.url} title={link.title} target={link.target}>
      <div className="rounded overflow-hidden">
        <div className="relative aspect-[5/3]">
          {picture && (
            <Image className="m-0" src={picture.url} alt={picture.alt} fill />
          )}
        </div>
        <div className="bg-slate-400 text-white py-2 px-4 text-xl text-center">
          {title}
        </div>
      </div>
    </Link>
  );
}
