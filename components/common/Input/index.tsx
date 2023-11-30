import styles from "./index.module.css";

interface Props {}

export default function Input({ className, ...rest }: any) {
  return <input className={`${styles.Input} ${className}`} {...rest} />;
}
