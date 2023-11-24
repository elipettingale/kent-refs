import ContactDetails from "@/components/common/ContactDetails";

interface Props {
  contacts: {
    picture: string;
    name: string;
    jobs: {
      title: string;
      email: string;
      phone: string;
    }[];
  }[];
}

export default function Contacts({ contacts }: Props) {
  return (
    <div className="grid grid-cols-3 gap-2">
      {contacts.map(({ name, jobs }, index) => (
        <div
          key={index}
          className="flex flex-1 bg-grey-100 rounded overflow-hidden"
        >
          <div className="p-4">
            <ContactDetails name={name} jobs={jobs} />
          </div>
        </div>
      ))}
    </div>
  );
}
