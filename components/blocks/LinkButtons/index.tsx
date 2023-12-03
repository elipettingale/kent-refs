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
    <div className="flex flex-wrap gap-2">
      {links.map((link, index) => (
        <LinkButton key={index} {...link} />
      ))}
    </div>
  );
}
