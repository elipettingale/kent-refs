import Logo from "@/components/common/Logo";
import { flatListToHierarchical } from "@/src/lib/helpers";
import { MenuType } from "@/src/lib/types";
import Link from "next/link";
import MobileMenu from "../MobileMenu";

const styles = require("./index.module.css");

interface Props {
  menu: MenuType;
}

export default function HeaderMenu({ menu }: Props) {
  const items = flatListToHierarchical(menu.menuItems.nodes);

  const renderMenuItem = ({ id, path, label, children }: any) => {
    return (
      <li key={id} className={styles.Menu__Item}>
        <Link href={path}>{label}</Link>
        {children.length > 0 ? (
          <ul>{children.map((child: any) => renderMenuSubItem(child))}</ul>
        ) : null}
      </li>
    );
  };

  const renderMenuSubItem = ({ id, path, label, children }: any) => {
    return (
      <li key={id} className={styles.Menu__SubItem}>
        <Link href={path}>{label}</Link>
        {children.length > 0 ? (
          <ul>{children.map((child: any) => renderMenuSubItem(child))}</ul>
        ) : null}
      </li>
    );
  };

  return (
    <div className={styles.Wrapper}>
      <div className="container-lg mx-auto flex justify-between">
        <Link href="/">
          <Logo className={styles.Logo} />
        </Link>
        <nav className={styles.Menu}>
          <ul>{items.map((item) => renderMenuItem(item))}</ul>
        </nav>
        <MobileMenu items={items} />
      </div>
    </div>
  );
}
