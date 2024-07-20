'use client'

import Download from "@/components/common/Download";
import Input from "@/components/common/Input";
import { useState } from "react";

const sections = [
    {
      name: "Referees",
      key: "referees",
    },
    {
      name: "Advisors",
      key: "advisors",
    },
    {
      name: "Rules & Regs",
      key: "rules-and-regs",
    },
    {
      name: "Clubs",
      key: "clubs",
    },
    {
      name: "Schools",
      key: "schools",
    },
    {
      name: "Policies & Protocols",
      key: "agm-policies",
    },
  ];
  
  function renderSection(title: string, downloads: any[]) {
    if (downloads.length === 0) {
      return;
    }
  
    return (
      <div className="pt-8">
        <p className="text-2xl mb-2 font-roboto">{title}</p>
        <div className="flex flex-wrap gap-2">
          {downloads.map(({ node: download }: any) => (
            <Download key={download.id} {...download} />
          ))}
        </div>
      </div>
    );
  }

export default function Downloads({ downloads }: any) {
  const [search, setSearch] = useState("");

  const filteredDownloads = downloads.filter((download: any) => {
    return download.node.title.toLowerCase().includes(search.toLowerCase());
  });

  const downloadsForSection = (section: string) => {
    return filteredDownloads.filter((download: any) => {
      return download.node.downloadFields.section === section;
    });
  };

  return (
    <div>
      <Input
        type="text"
        placeholder="Search..."
        value={search}
        onChange={(event: any) => setSearch(event.target.value)}
      />
      <div className="md:columns-2 gap-12 mt-[-1rem]">
        {sections.map((section) => (
          <div key={section.key} className="break-inside-avoid">
            {renderSection(section.name, downloadsForSection(section.key))}
          </div>
        ))}
      </div>
    </div>
  );
}
