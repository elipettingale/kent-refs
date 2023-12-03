import styles from "./index.module.css";

interface Props {}

export default function TextArea({ className, ...rest }: any) {
  return <textarea className={`${styles.TextArea} ${className}`} {...rest} />;
}
