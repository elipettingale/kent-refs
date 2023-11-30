import Banner from "@/components/blocks/Banner";
import Card from "@/components/common/Card";
import Input from "@/components/common/Input";
import { getAllPosts, getGlobal, getPageBySlug } from "@/src/lib/api";
import { renderContent } from "@/src/lib/helpers";
import { PageType } from "@/src/lib/types";
import { GetStaticProps } from "next";
import { useState } from "react";

interface Props {
  page: PageType;
  documents: any;
}

export default function Page({ page, documents }: Props) {
  const [search, setSearch] = useState("");

  const filteredDocments = documents.filter((document: any) => {
    return document.node.title.toLowerCase().includes(search.toLowerCase());
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
              <div>
                {filteredDocments.map(({ node: document }: any) => (
                  <div key={document.id}>{document.title}</div>
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
  const page = await getPageBySlug("/documents");
  const documents = await getAllPosts(
    "documents",
    `
      id
      title
      documentFields {
        document {
          mediaItemUrl
        }
      }
    `
  );

  return {
    props: {
      global: global,
      page: page,
      seo: page?.seo,
      documents: documents,
    },
    revalidate: 10,
  };
};
