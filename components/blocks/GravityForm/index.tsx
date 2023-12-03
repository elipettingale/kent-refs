import Button from "@/components/common/Button";
import Input from "@/components/common/Input";
import { useState } from "react";

interface Props {}

export default function GravityForm({}: Props) {
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = (event: any) => {
    event.preventDefault();

    setTimeout(() => {
      setSubmitted(true);
    }, 300);
  };

  if (submitted) {
    return (
      <div>
        <p>Thank you, we'll be in touch.</p>
      </div>
    );
  }

  return (
    <form className="w-full" onSubmit={onSubmit}>
      <Input type="text" placeholder="Your Name" required />
      <Input type="text" placeholder="Your Email Address" required />
      <div className="text-right">
        <Button>Submit</Button>
      </div>
    </form>
  );
}
