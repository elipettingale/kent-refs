import Link from "next/link";
import styles from "./index.module.css";
import { Url } from "next/dist/shared/lib/router/router";

interface Props {
  className?: string;
  href: Url;
  children: any;
}

export default function LinkButton({
  className,
  href,
  children,
  ...rest
}: Props) {
  return (
    <Link className={`${styles.Button} ${className}`} href={href} {...rest}>
      {children}
    </Link>
  );
}
