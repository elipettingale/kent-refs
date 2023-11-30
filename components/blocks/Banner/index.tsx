import { MediaType } from "@/src/lib/types";
import styles from "./index.module.css";
import useThemeOptions from "@/src/hooks/useThemeOptions";

interface Props {
  backgroundImage?: MediaType;
  title: string;
}

export default function Banner({ backgroundImage, title }: Props) {
  const [themeOptions] = useThemeOptions();

  let backgroundSrc =
    backgroundImage?.mediaItemUrl ??
    themeOptions.defaults.bannerImage.mediaItemUrl;

  return (
    <div className="h-[250px]">
      <div
        className="h-full bg-cover"
        style={{
          backgroundImage: `url(${backgroundSrc})`,
        }}
      >
        <div className={styles.Overlay}>
          <div className={styles.Content}>
            <p className="text-3xl font-roboto uppercase text-white font-bold">
              {title}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
