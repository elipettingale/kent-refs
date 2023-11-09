import { HTMLAttributeAnchorTarget } from "react";
import LinkButton from "../LinkButton";

interface Props {
  links: {
    url: string;
    title: string;
    target: HTMLAttributeAnchorTarget | undefined;
  }[];
}

export default function LinkButtons({ links }: Props) {
  return (
    <div className="flex gap-2">
      {links.map((link) => (
        <LinkButton {...link} />
      ))}
    </div>
  );
}
