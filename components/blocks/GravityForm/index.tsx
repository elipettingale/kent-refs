"use client"

import Button from "@/components/common/Button";
import Input from "@/components/common/Input";
import TextArea from "@/components/common/TextArea";
import { useState } from "react";

interface Props {}

export default function GravityForm({ full = false }: any) {
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = async (event: any) => {
    event.preventDefault();

    var formData = new FormData(event.target);

    await fetch("https://cms.kentrefs.co.uk/wp-json/ejp/v1/gravity-form", {
      method: "POST",
      body: formData,
    });

    setSubmitted(true);
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
        <Input name="name" type="text" placeholder="Your Name" required />
        <Input
          name="email"
          type="text"
          placeholder="Your Email Address"
          required
        />
        <Input name="subject" type="text" placeholder="Subject" required />
        <TextArea name="message" placeholder="Message" rows={6} required />
        <div className="text-right">
          <Button>Submit</Button>
        </div>
      </form>
    );
  }

  return (
    <form className="w-full" onSubmit={onSubmit}>
      <Input name="name" type="text" placeholder="Your Name" required />
      <Input
        name="email"
        type="text"
        placeholder="Your Email Address"
        required
      />
      <TextArea name="message" placeholder="Message" rows={4} required />
      <div className="text-right">
        <Button>Submit</Button>
      </div>
    </form>
  );
}
