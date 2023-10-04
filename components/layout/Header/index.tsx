import TopBar from "../TopBar";
import MainMenu from "../MainMenu";
import { MenuType } from "@/src/lib/types";

const styles = require("./index.module.css");

interface Props {
  menu: MenuType;
}

export default function Header({ menu }: Props) {
  console.log("menu", menu);
  return (
    <div className={styles.Header}>
      <TopBar />
      <MainMenu menu={menu} />
    </div>
  );
}
