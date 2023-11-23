import Image from "@/components/common/Image";
import { ImageType, MediaType } from "@/src/lib/types";

interface Props {
  picture: string;
  name: string;
  jobs: {
    title: string;
    email: string;
    phone: string;
  }[];
}

export default function Contact({ picture, name, jobs }: Props) {
  console.log(jobs);

  return (
    <div className="flex bg-grey-100 rounded overflow-hidden">
      <div className="relative aspect-[1/1] w-[40%]">
        {picture && <Image className="m-0" src={picture} alt={name} fill />}
      </div>
      <div className="p-4 w-[60%]">
        <div className="text-2xl mb-3">{name}</div>
        {jobs.map(({ title, email, phone }) => (
          <div className="mb-2">
            <div className="text-md font-roboto text-blue">{title}</div>
            <div className="text-sm">
              {email && (
                <div>
                  @ <a href={`mailto:${email}`}>{email}</a>
                </div>
              )}
              {phone && (
                <div>
                  @ <a href={`tel:${email}`}>{phone}</a>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
