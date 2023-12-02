import { getAllPosts, getGlobal, getPostBySlug } from "@/src/lib/api";
import { GetStaticPaths, GetStaticProps } from "next";
import { renderContent } from "@/src/lib/helpers";
import Banner from "@/components/blocks/Banner";
import Card from "@/components/common/Card";

export default function Page({ law }: any) {
  return (
    <div>
      <Banner title={law.title} />
      <div className="bg-grey-100 py-12">
        <div className="container-md mx-auto">
          <article>
            <Card className="copy p-8">{renderContent(law.content)}</Card>
          </article>
        </div>
      </div>
    </div>
  );
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const global = await getGlobal();
  const law = await getPostBySlug("law", params?.slug as string);

  return {
    notFound: law === null,
    props: {
      global: global,
      law: law,
      seo: law?.seo,
    },
    revalidate: 10,
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = await getAllPosts("laws");

  return {
    paths:
      posts.map(
        ({ node }: { node: { slug: string } }) => `/laws/${node.slug}`
      ) || [],
    fallback: "blocking",
  };
};
