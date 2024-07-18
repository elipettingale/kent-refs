import SocialIcons from "@/components/common/SocialIcons";
import Search from "../Search";
import { getThemeOptions } from "@/src/lib/api";

export default async function TopBar() {
  const themeOptions = await getThemeOptions();

  return (
    <div className="bg-slate text-white py-3 sm:py-2">
      <div className="container-lg mx-auto flex justify-between">
        <SocialIcons {...themeOptions.social} />
        <Search />
      </div>
    </div>
  );
}
