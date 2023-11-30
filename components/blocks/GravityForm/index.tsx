import Button from "@/components/common/Button";
import Input from "@/components/common/Input";

interface Props {}

export default function GravityForm({}: Props) {
  return (
    <form className="w-full">
      <Input type="text" placeholder="Your Name" />
      <Input type="text" placeholder="Your Email Address" />
      <div className="text-right">
        <Button>Submit</Button>
      </div>
    </form>
  );
}
