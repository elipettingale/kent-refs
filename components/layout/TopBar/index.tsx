import SocialIcons from "@/components/common/SocialIcons";
import useThemeOptions from "@/src/hooks/useThemeOptions";
import Search from "../Search";

export default function TopBar() {
  const [theme] = useThemeOptions();

  return (
    <div className="bg-slate text-white py-2">
      <div className="container-lg mx-auto flex justify-between">
        <SocialIcons {...theme.social} />
        {/* <Search /> */}
      </div>
    </div>
  );
}
