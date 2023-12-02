import Banner from "@/components/blocks/Banner";
import Card from "@/components/common/Card";
import Input from "@/components/common/Input";
import {
  getAllPostsForTaxonomy,
  getGlobal,
  getPageBySlug,
} from "@/src/lib/api";
import { renderContent } from "@/src/lib/helpers";
import { PageType } from "@/src/lib/types";
import { GetStaticProps } from "next";
import Link from "next/link";
import { useState } from "react";

interface Props {
  page: PageType;
  laws: any;
}

export default function Page({ page, laws }: Props) {
  const [search, setSearch] = useState("");

  const filteredLaws = laws.filter((law: any) => {
    return law.node.title.toLowerCase().includes(search.toLowerCase());
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
              <div className="flex gap-2">
                {filteredLaws.map(({ node: law }: any) => (
                  <Link
                    key={law.id}
                    href={law.link}
                    className="bg-blue text-white px-6 py-3 rounded"
                  >
                    {law.title}
                  </Link>
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
  const page = await getPageBySlug("/domesitc-law-variations");
  const laws = await getAllPostsForTaxonomy(
    "laws",
    "lawTypeSlug",
    "domestic-law-variations",
    `
      id
      title
      link
    `
  );

  return {
    props: {
      global: global,
      page: page,
      seo: page?.seo,
      laws: laws,
    },
    revalidate: 10,
  };
};
