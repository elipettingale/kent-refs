import { getAllPosts, getGlobal, getPostBySlug } from "@/src/lib/api";
import { GetStaticPaths, GetStaticProps } from "next";
import { renderContent } from "@/src/lib/helpers";
import Banner from "@/components/blocks/Banner";
import Card from "@/components/common/Card";

export default function Page({ lawClarification }: any) {
  return (
    <div>
      <Banner title={lawClarification.title} />
      <div className="bg-grey-100 py-12">
        <div className="container-md mx-auto">
          <article>
            <Card className="copy p-8">
              {renderContent(lawClarification.content)}
            </Card>
          </article>
        </div>
      </div>
    </div>
  );
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const global = await getGlobal();
  const lawClarification = await getPostBySlug(
    "lawClarification",
    params?.slug as string
  );

  return {
    notFound: lawClarification === null,
    props: {
      global: global,
      lawClarification: lawClarification,
      seo: lawClarification?.seo,
    },
    revalidate: 10,
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = await getAllPosts("lawClarifications");

  return {
    paths:
      posts.map(
        ({ node }: { node: { slug: string } }) =>
          `/law-clarifications/${node.slug}`
      ) || [],
    fallback: "blocking",
  };
};
