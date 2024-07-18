'use client'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { useRef, useState } from "react";
import { BEM } from "@/src/lib/helpers";
import { useRouter } from "next/navigation";

const styles = require("./index.module.css");

export default function Search() {
  const [isOpen, setIsOpen] = useState(false);
  const [blurTimeout, setBlurTimeout] = useState<NodeJS.Timeout | null>(null);
  const router = useRouter();
  const inputRef = useRef<any>();

  const submit = () => {
    let q = inputRef.current.value;

    if (q === "") {
      return;
    }

    inputRef.current.blur();

    router.push(`/search?q=${q}`);
  };

  const handleOnClick = () => {
    if (isOpen) {
      return submit();
    }

    setIsOpen(true);

    setTimeout(() => {
      inputRef.current.focus();
    }, 200);
  };

  const handleOnKeyDown = (e: any) => {
    if (e.key === "Enter") {
      submit();
    }
  };

  const handleBlur = (e: any) => {
    let timeout = setTimeout(() => {
      setIsOpen(false);

      setTimeout(() => {
        inputRef.current.value = "";
      }, 200);
    }, 500);

    setBlurTimeout(timeout);
  };

  return (
    <div
      className={BEM(styles, "Wrapper", {
        isOpen: isOpen,
      })}
      onBlur={handleBlur}
    >
      <input
        ref={inputRef}
        className={styles.Input}
        onKeyDown={handleOnKeyDown}
      />
      <div className={styles.Icon} onClick={handleOnClick}>
        <FontAwesomeIcon icon={faSearch} />
      </div>
    </div>
  );
}
