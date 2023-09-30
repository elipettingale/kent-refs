import { getAllPosts, getGlobal, getPostBySlug } from "@/src/lib/api";
import { GetStaticPaths, GetStaticProps } from "next";
import { renderContent } from "@/src/lib/helpers";

export default function Page({ event }: any) {
  const { date } = event.eventFields;

  return (
    <div>
      <div className="mb-2">
        <h1>{event.title}</h1>
        <p>{date}</p>
      </div>
      {renderContent(event.content)}
    </div>
  );
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const global = await getGlobal();
  const event = await getPostBySlug(
    "event",
    params?.slug as string,
    `
    eventFields {
        date
    }
  `
  );

  return {
    notFound: event === null,
    props: {
      global: global,
      event: event,
      seo: event?.seo,
    },
    revalidate: 10,
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = await getAllPosts("events");

  return {
    paths:
      posts.map(
        ({ node }: { node: { slug: string } }) => `/events/${node.slug}`
      ) || [],
    fallback: "blocking",
  };
};
