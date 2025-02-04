import ContactDetails from "@/components/common/ContactDetails";
import Image from "@/components/common/Image";

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
  return (
    <div className="block sm:flex bg-grey-100 rounded overflow-hidden">
      <div className="relative aspect-square sm:w-[40%]">
        {picture && <Image className="m-0" src={picture} alt={name} fill />}
      </div>
      <div className="p-4 sm:w-[60%]">
        <ContactDetails name={name} jobs={jobs} />
      </div>
    </div>
  );
}
