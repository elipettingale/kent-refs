import { BEM } from "@/src/lib/helpers";
import styles from "./index.module.css";
import { useState } from "react";
import Logo from "@/components/common/Logo";
import HorseLogo from "@/components/common/HorseLogo";
import Link from "next/link";

interface Props {}

export default function MobileMenu({ items }: any) {
  const [isOpen, setIsOpen] = useState(false);

  const close = () => {
    setTimeout(() => {
      setIsOpen(false);
    }, 100);
  };

  const renderMenuItem = ({ id, path, label, children }: any) => {
    return (
      <li key={id} className="mb-2 text-grey-800" onClick={close}>
        <Link href={path} className="text-3xl font-roboto">
          {label}
        </Link>
        {children.length > 0 ? (
          <ul className="hidden">
            {children.map((child: any) => renderMenuSubItem(child))}
          </ul>
        ) : null}
      </li>
    );
  };

  const renderMenuSubItem = ({ id, path, label, children }: any) => {
    return (
      <li key={id}>
        <Link href={path}>{label}</Link>
        {children.length > 0 ? (
          <ul>{children.map((child: any) => renderMenuSubItem(child))}</ul>
        ) : null}
      </li>
    );
  };

  return (
    <>
      <div
        className="flex items-center cursor-pointer xl:hidden"
        onClick={() => setIsOpen(true)}
      >
        <p className="font-roboto mr-2 text-2xl text-slate-500">Menu</p>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={50}
          height={50}
          fill="none"
          viewBox="0 0 24 24"
          className="stroke-slate-500"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 12h16M4 8h16M4 16h8"
          />
        </svg>
      </div>
      <div
        className={BEM(styles, "Wrapper", {
          isClosed: !isOpen,
        })}
      >
        <div className={styles.Inner}>
          <div className="flex justify-between items-start">
            <div className="flex items-center">
              <div className="mr-2">
                <p className="text-3xl font-roboto uppercase text-blue font-bold">
                  Welcome To
                </p>
                <p className="text-5xl font-roboto uppercase text-grey-800 font-bold">
                  KSRFUR
                </p>
              </div>
              <HorseLogo className="w-24" />
            </div>
            <div className={styles.Close} onClick={() => setIsOpen(false)}>
              <p className="text-2xl font-roboto mr-2">Close</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={30}
                height={30}
                viewBox="-0.5 0 25 25"
                className="stroke-black"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="m3 21.32 18-18M3 3.32l18 18"
                />
              </svg>
            </div>
          </div>

          <div className="mt-8">
            <nav>
              <ul>{items.map((item: any) => renderMenuItem(item))}</ul>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
}
