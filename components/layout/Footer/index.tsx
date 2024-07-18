import HorseLogo from "@/components/common/HorseLogo";
import { MediaType } from "@/src/lib/types";
import FooterMenu from "../FooterMenu";
import PhoneIcon from "@/components/common/PhoneIcon";
import EmailIcon from "@/components/common/EmailIcon";
import Image from "@/components/common/Image";
import GravityForm from "@/components/blocks/GravityForm";
import LinesIcon from "@/components/common/LinesIcon";
import { getMenu, getThemeOptions } from "@/src/lib/api";

const styles = require("./index.module.css");

export default async function Footer() {
  const {contact, footer} = await getThemeOptions();
  const menu = await getMenu("main-menu");

  return (
    <footer className={styles.Footer}>
      <div className="container-lg mx-auto">
        <div className="flex flex-col items-center md:flex-row md:items-start gap-12">
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
                  className="w-full aspect-[4/3] relative rounded overflow-hidden"
                >
                  <Image src={image.sourceUrl} alt={image.altText} fill />
                </div>
              ))}
            </div>
          </div>
          <div className={styles.Column}>
            <div>
              <p className="text-3xl font-roboto">Get In Touch</p>
              <LinesIcon orientation="horizontal" color="blue" />
            </div>

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
