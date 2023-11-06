import { MenuType } from "@/src/lib/types";
import styles from "./index.module.css";
import { flatListToHierarchical } from "@/src/lib/helpers";
import Link from "next/link";

interface Props {
  menu: MenuType;
}

export default function FooterMenu({ menu }: Props) {
  const items = flatListToHierarchical(menu.menuItems.nodes);

  return (
    <nav className={styles.Menu}>
      <ul>
        {items.map(({ id, label, path }) => (
          <li key={id} className={styles.Menu__Item}>
            <Link href={path}>{label}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
