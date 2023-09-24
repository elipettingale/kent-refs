import { getGlobal, getPageBySlug, getPosts } from "@/src/lib/api";
import { GetStaticProps } from "next";
import useLoadMorePosts from "@/src/hooks/useLoadMorePosts";
import { PageType, PaginatedPostsType } from "@/src/lib/types";
import Link from "next/link";

interface Props {
  page: NewsPageType;
  initialPosts: PaginatedPostsType;
}

interface NewsPageType extends PageType {
  newsFields: {
    foo: string;
  };
}

export default function Page({ page, initialPosts }: Props) {
  const [posts, isLoading, hasMore, loadMore] = useLoadMorePosts(
    "posts",
    initialPosts
  );

  return (
    <div>
      <h1>{page.title}</h1>
      <div>
        {posts.map(({ node: post }) => (
          <Link key={post.id} href={post.link}>
            <div>{post.title}</div>
          </Link>
        ))}
      </div>
      {isLoading ? "Loading..." : null}
      <div>
        {hasMore ? (
          <button onClick={() => loadMore()} disabled={isLoading}>
            Load More
          </button>
        ) : null}
      </div>
    </div>
  );
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const global = await getGlobal();
  const page = await getPageBySlug(
    "news"
  );

  const posts = await getPosts("posts");

  return {
    props: {
      global: global,
      page: page,
      seo: page?.seo,
      initialPosts: posts,
    },
    revalidate: 10,
  };
};
