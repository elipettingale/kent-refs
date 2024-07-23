"use client"

import Input from "@/components/common/Input";
import Link from "next/link";
import { useState } from "react";

interface Props {
  laws: any;
}

export default function Laws({ laws }: Props) {
  const [search, setSearch] = useState("");

  const filteredLaws = laws.filter((law: any) => {
    return law.node.title.toLowerCase().includes(search.toLowerCase());
  });

  return (
    <div>
      <Input
        type="text"
        placeholder="Search..."
        value={search}
        onChange={(event: any) => setSearch(event.target.value)}
      />
      <div className="flex flex-wrap gap-2">
        {filteredLaws.map(({ node: law }: any) => (
          <Link
            key={law.id}
            href={law.link}
            className="bg-blue text-white px-6 py-3 rounded whitespace-nowrap"
          >
            {law.title}
          </Link>
        ))}
      </div>
    </div>
  );
}
