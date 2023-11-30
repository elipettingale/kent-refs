import HorseLogo from "@/components/common/HorseLogo";
import useThemeOptions from "@/src/hooks/useThemeOptions";
import { MediaType, MenuType } from "@/src/lib/types";
import FooterMenu from "../FooterMenu";
import PhoneIcon from "@/components/common/PhoneIcon";
import EmailIcon from "@/components/common/EmailIcon";
import Image from "@/components/common/Image";
import GravityForm from "@/components/blocks/GravityForm";

const styles = require("./index.module.css");

interface Props {
  menu: MenuType;
}

export default function Footer({ menu }: Props) {
  const [{ contact, footer }] = useThemeOptions();

  console.log("footer", footer);

  return (
    <footer className={styles.Footer}>
      <div className="container mx-auto">
        <div className="flex gap-12">
          <div className={styles.Column}>
            <HorseLogo height="150px" />
            <p>{footer.text}</p>
            <div className={styles.Contact}>
              <a href={`tel:${contact.phone}`}>
                <PhoneIcon size={20} fill="blue" /> {contact.phone}
              </a>
              <a href={`mailto:${contact.email}`}>
                <EmailIcon size={20} fill="blue" /> {contact.email}
              </a>
            </div>
          </div>
          <div className={styles.Column}>
            <div className="w-full grid grid-cols-3 gap-2">
              {footer.gallery.map((image: MediaType) => (
                <div
                  key={image.id}
                  className="h-full w-full bg-[pink] aspect-[4/3] relative rounded overflow-hidden"
                >
                  <Image src={image.sourceUrl} alt={image.altText} fill />
                </div>
              ))}
            </div>
          </div>
          <div className={styles.Column}>
            <p className="text-3xl font-roboto">Get In Touch</p>
            <div className="w-full">
              <GravityForm />
            </div>
          </div>
        </div>
        <hr className="mt-12 mb-4 text-slate-300"></hr>
        <div className="flex justify-between">
          <div>Kent Refs © 2023</div>
          <div>
            <FooterMenu menu={menu} />
          </div>
        </div>
      </div>
    </footer>
  );
}
