import { BEM } from "@/src/lib/helpers";
import { MenuType } from "@/src/lib/types";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
const styles = require("./index.module.css");

interface Props {
  menu: MenuType | null;
}

export default function Header({ menu }: Props) {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  let items = menu?.menuItems?.nodes ?? [];

  return (
    <header className={styles.Header}>
      <div className={styles.Header__Inner}>
        <button onClick={() => setIsOpen(true)}>Burger Menu</button>
      </div>
      <div
        className={BEM(styles, "Menu", {
          isOpen: isOpen,
        })}
      >
        <button onClick={() => setIsOpen(false)}>X</button>
        <nav>
          <ul>
            <li
              className={BEM(styles, "MenuItem", {
                isActive: router.pathname === "/",
              })}
            >
              <Link href="/" onClick={() => setIsOpen(false)}>
                Home
              </Link>
            </li>
            {items.map(({ id, path, label }: any) => (
              <li
                key={id}
                className={BEM(styles, "MenuItem", {
                  isActive: router.pathname + "/" === path,
                })}
              >
                <Link href={path} onClick={() => setIsOpen(false)}>
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
