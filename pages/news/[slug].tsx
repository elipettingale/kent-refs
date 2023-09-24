import { getAllPosts, getGlobal, getPostBySlug } from "@/src/lib/api";
import { GetStaticPaths, GetStaticProps } from "next";
import { PostType } from "@/src/lib/types";
import FeaturedImage from "@/components/common/FeaturedImage";
import { renderContent } from "@/src/lib/helpers";

interface Props {
  post: PostType;
}

export default function Post({ post }: Props) {
  return (
    <div>
      <h1>{post.title}</h1>
      {post.featuredImage ? (
        <FeaturedImage mediaItem={post.featuredImage.node} />
      ) : null}
      {renderContent(post.content)}
    </div>
  );
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const global = await getGlobal();
  const post = await getPostBySlug("post", params?.slug as string);

  return {
    notFound: post === null,
    props: {
      global: global,
      post: post,
      seo: post?.seo,
    },
    revalidate: 10,
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = await getAllPosts("posts");

  return {
    paths:
      posts.map(
        ({ node }: { node: { slug: string } }) => `/news/${node.slug}`
      ) || [],
    fallback: "blocking",
  };
};
