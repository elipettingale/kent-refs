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
            <div>0{index + 1}</div>
            <div>
              <p className="text-slate-200 font-roboto font-bold text-xl mb-2">
                {title}
              </p>
              <p className="text-blue uppercase text-sm">{description}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
