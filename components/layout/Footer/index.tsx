import HorseLogo from "@/components/common/HorseLogo";
import useThemeOptions from "@/src/hooks/useThemeOptions";
import { MenuType } from "@/src/lib/types";
import FooterMenu from "../FooterMenu";
import PhoneIcon from "@/components/common/PhoneIcon";
import EmailIcon from "@/components/common/EmailIcon";

const styles = require("./index.module.css");

interface Props {
  menu: MenuType;
}

export default function Footer({ menu }: Props) {
  const [{ contact, footer }] = useThemeOptions();

  return (
    <footer className={styles.Footer}>
      <div className="container mx-auto">
        <div className="flex gap-4">
          <div className={styles.Column}>
            <HorseLogo height="150px" />
            <p>{footer.text}</p>
            <a href={`tel:${contact.phone}`}>
              <PhoneIcon size={20} /> {contact.phone}
            </a>
            <a href={`mailto:${contact.email}`}>
              <EmailIcon size={20} /> {contact.email}
            </a>
          </div>
          <div className={styles.Column}>
            <p className="text-3xl font-roboto">Latest News</p>
            <div>...</div>
          </div>
          <div className={styles.Column}>
            <p className="text-3xl font-roboto">Lorem Ipsum</p>
            <div>...</div>
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
