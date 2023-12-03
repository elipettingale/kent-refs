import Button from "@/components/common/Button";
import Input from "@/components/common/Input";
import TextArea from "@/components/common/TextArea";
import { useState } from "react";

interface Props {}

export default function GravityForm({ full = false }: any) {
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
        <p>{"Thank you, we'll be in touch soon."}</p>
      </div>
    );
  }

  if (full) {
    return (
      <form className="w-full" onSubmit={onSubmit}>
        <Input type="text" placeholder="Your Name" required />
        <Input type="text" placeholder="Your Email Address" required />
        <Input type="text" placeholder="Subject" required />
        <TextArea placeholder="Message" rows={6} required />
        <div className="text-right">
          <Button>Submit</Button>
        </div>
      </form>
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
