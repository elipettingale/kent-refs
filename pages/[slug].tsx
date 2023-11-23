import { getAllPages, getGlobal, getPageBySlug } from "@/src/lib/api";
import { GetStaticPaths, GetStaticProps } from "next";
import { renderContent } from "@/src/lib/helpers";
import Banner from "@/components/blocks/Banner";
import Card from "@/components/common/Card";

export default function Page({ page }: any) {
  const fields = page.pageFields;

  return (
    <div>
      <Banner title={page.title} />
      <div className="bg-grey-100 py-12">
        <div className={`container-${fields.container} mx-auto`}>
          <article>
            <Card className="copy p-8">{renderContent(page.content)}</Card>
          </article>
        </div>
      </div>
    </div>
  );
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const global = await getGlobal();
  const page = await getPageBySlug(
    params?.slug as string,
    `pageFields {
      container
    }`
  );

  return {
    notFound: page === null,
    props: {
      global: global,
      page: page,
      seo: page?.seo,
    },
    revalidate: 10,
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const data = await getAllPages();

  let pages = data.filter((page: any) => {
    return (
      page.node.template.templateName === "Default" && !page.node.isFrontPage
    );
  });

  return {
    paths:
      pages.map(({ node }: { node: { slug: string } }) => `/${node.slug}`) ||
      [],
    fallback: "blocking",
  };
};
