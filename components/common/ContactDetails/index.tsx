import EmailIcon from "../EmailIcon";
import PhoneIcon from "../PhoneIcon";

interface Props {
  name: string;
  jobs: {
    title: string;
    email: string;
    phone: string;
  }[];
}

export default function ContactDetails({ name, jobs }: Props) {
  return (
    <div>
      <div className="text-2xl mb-2">{name}</div>
      {jobs.map(({ title, email, phone }, index) => (
        <div key={index} className="mb-2">
          <div className="text-md font-roboto text-blue">{title}</div>
          <div className="text-sm">
            {email && (
              <div>
                <EmailIcon fill="grey-800" />
                <a href={`mailto:${email}`}>{email}</a>
              </div>
            )}
            {phone && (
              <div>
                <PhoneIcon fill="grey-800" />
                <a href={`tel:${email}`}>{phone}</a>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
