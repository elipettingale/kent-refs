import { MenuType } from "@/src/lib/types";
import Link from "next/link";
const styles = require("./index.module.css");

interface Props {
  menu: MenuType | null;
}

export default function Footer({ menu }: Props) {
  let items = menu?.menuItems?.nodes ?? [];

  return (
    <footer className={styles.Footer}>
      <nav className={styles.Menu}>
        <ul>
          {items.map(({ id, path, label }) => (
            <li key={id} className={styles.MenuItem}>
              <Link href={path}>{label}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </footer>
  );
}
