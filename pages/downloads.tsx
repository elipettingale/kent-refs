import Banner from "@/components/blocks/Banner";
import Card from "@/components/common/Card";
import Download from "@/components/common/Download";
import Input from "@/components/common/Input";
import { getAllPosts, getGlobal, getPageBySlug } from "@/src/lib/api";
import { renderContent } from "@/src/lib/helpers";
import { PageType } from "@/src/lib/types";
import { GetStaticProps } from "next";
import { useState } from "react";

interface Props {
  page: PageType;
  downloads: any;
}

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
    name: "AGM Policies",
    key: "agm-policies",
  },
];

function renderSection(title: string, downloads: any[]) {
  if (downloads.length === 0) {
    return;
  }

  return (
    <div className="mt-6">
      <p className="text-2xl mb-2 font-roboto">{title}</p>
      <div className="flex flex-wrap gap-2">
        {downloads.map(({ node: download }: any) => (
          <Download key={download.id} {...download} />
        ))}
      </div>
    </div>
  );
}

export default function Page({ page, downloads }: Props) {
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
      <Banner title={page.title} />
      <div className="bg-grey-100 py-12">
        <div className="container-sm mx-auto">
          <Card className="p-8">
            {page.content && (
              <div className="copy mb-8">{renderContent(page.content)}</div>
            )}
            <div>
              <Input
                type="text"
                placeholder="Search..."
                value={search}
                onChange={(event: any) => setSearch(event.target.value)}
              />
              <div className="md:grid grid-cols-2 gap-4">
                {sections.map((section) => (
                  <div key={section.key}>
                    {renderSection(
                      section.name,
                      downloadsForSection(section.key)
                    )}
                  </div>
                ))}
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const global = await getGlobal();
  const page = await getPageBySlug("/downloads");
  const downloads = await getAllPosts(
    "downloads",
    `
      id
      title
      downloadFields {
        description
        section
        document {
          mediaItemUrl
          mimeType
        }
      }
    `
  );

  return {
    props: {
      global: global,
      page: page,
      seo: page?.seo,
      downloads: downloads,
    },
    revalidate: 10,
  };
};
