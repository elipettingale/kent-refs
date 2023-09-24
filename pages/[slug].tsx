import { getAllPages, getGlobal, getPageBySlug } from "@/src/lib/api";
import { GetStaticPaths, GetStaticProps } from "next";
import { renderContent } from "@/src/lib/helpers";

export default function Page({ page }: any) {
  return (
    <div>
      <h1>{page.title}</h1>
      {renderContent(page.content)}
    </div>
  );
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const page = await getPageBySlug(params?.slug as string);

  return {
    notFound: page === null,
    props: {
      page: page,
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
