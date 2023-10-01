import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { useRef, useState } from "react";
import { BEM } from "@/src/lib/helpers";

const styles = require("./index.module.css");

export default function Search() {
  const [isOpen, setIsOpen] = useState(false);
  const inputRef = useRef<any>();

  const submit = () => {
    let q = inputRef.current.value;
    console.log("SUBMIT", q);
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

  return (
    <div
      className={BEM(styles, "Wrapper", {
        isOpen: isOpen,
      })}
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
