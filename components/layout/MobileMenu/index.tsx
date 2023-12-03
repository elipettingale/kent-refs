import { BEM } from "@/src/lib/helpers";
import styles from "./index.module.css";
import { useState } from "react";
import Logo from "@/components/common/Logo";

interface Props {}

export default function MobileMenu({ items }: any) {
  const [isOpen, setIsOpen] = useState(false);

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
        <Logo className="w-[150px] mb-8" />
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
        <div>Mobile Menu</div>
      </div>
    </>
  );
}
