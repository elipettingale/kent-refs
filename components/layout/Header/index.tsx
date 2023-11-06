import TopBar from "../TopBar";
import HeaderMenu from "../HeaderMenu";
import { MenuType } from "@/src/lib/types";

const styles = require("./index.module.css");

interface Props {
  menu: MenuType;
}

export default function Header({ menu }: Props) {
  return (
    <div className={styles.Header}>
      <TopBar />
      <HeaderMenu menu={menu} />
    </div>
  );
}
