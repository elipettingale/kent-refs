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

export default function Page({ page, downloads }: Props) {
  const [search, setSearch] = useState("");

  const filteredDownloads = downloads.filter((download: any) => {
    return download.node.title.toLowerCase().includes(search.toLowerCase());
  });

  return (
    <div>
      <Banner title={page.title} />
      <div className="bg-grey-100 py-12">
        <div className="container-md mx-auto">
          <Card className="p-8">
            <div className="copy mb-8">{renderContent(page.content)}</div>
            <div>
              <Input
                type="text"
                placeholder="Search..."
                value={search}
                onChange={(event: any) => setSearch(event.target.value)}
              />
              <div className="flex flex-wrap gap-2">
                {filteredDownloads.map(({ node: download }: any) => (
                  <Download key={download.id} {...download} />
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
