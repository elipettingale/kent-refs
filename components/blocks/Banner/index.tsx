import { MediaType } from "@/src/lib/types";
import styles from "./index.module.css";
import useThemeOptions from "@/src/hooks/useThemeOptions";

interface Props {
  backgroundImage?: MediaType;
  title: string;
  subtitle?: string;
}

export default function Banner({ backgroundImage, title, subtitle }: Props) {
  const [themeOptions] = useThemeOptions();

  let backgroundSrc =
    backgroundImage?.sourceUrl ?? themeOptions.defaults.bannerImage.sourceUrl;

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
            <p className="text-4xl font-roboto uppercase text-white font-bold">
              {title}
            </p>
            {subtitle && (
              <p className="text-white font-roboto text-lg mt-2">{subtitle}</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
