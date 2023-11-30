import styles from "./index.module.css";

interface Props {}

export default function Button({ className, children, ...rest }: any) {
  return (
    <button className={`${styles.Button} ${className}`} {...rest}>
      {children}
    </button>
  );
}
