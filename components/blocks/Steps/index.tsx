import Link from "next/link";
import styles from "./index.module.css";
import { LinkType } from "@/src/lib/types";

interface Props {
  steps: {
    title: String;
    description: String;
    link: LinkType;
  }[];
  className?: String;
}

export default function Steps({ steps, className, ...rest }: Props) {
  return (
    <div className={`${styles.Wrapper} ${className}`} {...rest}>
      <div className="bg-slate-600 rounded flex">
        {steps.map(({ title, description, link }, index) => (
          <Link
            key={index}
            href={link?.url ?? "#"}
            target={link?.target}
            className={styles.Step}
          >
            <div className="px-4">
              <p className="text-white font-roboto font-bold text-2xl mb-2">
                {title}
              </p>
              <p className="text-blue-400 uppercase text-md font-bold font-roboto">
                {description}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
