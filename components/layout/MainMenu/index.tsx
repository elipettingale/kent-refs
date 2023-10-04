import Logo from "@/components/common/Logo";
import { MenuType } from "@/src/lib/types";
import Link from "next/link";

const styles = require("./index.module.css");

interface Props {
  menu: MenuType;
}

export default function MainMenu({ menu }: Props) {
  const items = menu.menuItems.nodes;

  return (
    <div className={styles.Wrapper}>
      <div className={styles.Inner}>
        <Logo className={styles.Logo} />
        <nav className={styles.Menu}>
          <ul>
            {items.map(({ id, path, label }: any) => (
              <li key={id}>
                <Link href={path}>{label}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
}
