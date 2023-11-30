import Button from "@/components/common/Button";
import styles from "./index.module.css";

interface Props {}

export default function GravityForm({}: Props) {
  return (
    <form className={styles.Form}>
      <input type="text" placeholder="Your Name" />
      <input type="text" placeholder="Your Email Address" />
      <div className="text-right">
        <Button>Submit</Button>
      </div>
    </form>
  );
}
