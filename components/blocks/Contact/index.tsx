import Image from "@/components/common/Image";
import { MediaType } from "@/src/lib/types";

interface Props {
  picture: {
    alt: string;
    url: string;
  };
  name: string;
  title: string;
  email: string;
  phone: string;
  address: string;
}

export default function Contact({
  picture,
  name,
  title,
  email,
  phone,
  address,
}: Props) {
  console.log(picture);
  return (
    <div className="flex bg-grey-100 rounded overflow-hidden">
      <div className="relative aspect-square w-[60%]">
        <Image className="m-0" src={picture.url} alt={picture.alt} fill />
      </div>
      <div className="p-4">
        <div className="text-2xl">{name}</div>
        <div className="text-xl font-roboto text-blue">{title}</div>
        <div className="mt-4">
          <ul className="list-none p-0">
            <li>
              <strong>Email:</strong> {email}
            </li>
            <li>
              <strong>Phone:</strong> {phone}
            </li>
            <li>
              <strong>Address:</strong> {address}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
