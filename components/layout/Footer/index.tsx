import { MenuType } from "@/src/lib/types";

const styles = require("./index.module.css");

interface Props {
  menu: MenuType;
}

export default function Footer({ menu }: Props) {
  return <footer className={styles.Footer}></footer>;
}
