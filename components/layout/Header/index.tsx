import TopBar from "../TopBar";
import HeaderMenu from "../HeaderMenu";
import { getMenu } from "@/src/lib/api";

const styles = require("./index.module.css");

export default async function Header() {
  const menu = await getMenu("main-menu");

  return (
    <div className={styles.Header}>
      <TopBar />
      <HeaderMenu menu={menu} />
    </div>
  );
}
