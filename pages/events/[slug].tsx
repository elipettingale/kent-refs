import {
  getAllPosts,
  getPostBySlug,
} from "@/src/lib/api";
import { GetStaticPaths, GetStaticProps } from "next";
import { renderContent } from "@/src/lib/helpers";

export default function Page({ event }: any) {
  return (
    <div>
      <h1>{event.title}</h1>
      {renderContent(event.content)}
    </div>
  );
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const event = await getPostBySlug('event', params?.slug as string);

  return {
    notFound: event === null,
    props: {
        event: event,
    },
    revalidate: 10,
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = await getAllPosts('events');

  return {
    paths:
      posts.map(
        ({ node }: { node: { slug: string } }) => `/events/${node.slug}`
      ) || [],
    fallback: "blocking",
  };
};
