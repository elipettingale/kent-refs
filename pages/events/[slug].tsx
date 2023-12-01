import { getAllPosts, getGlobal, getPostBySlug } from "@/src/lib/api";
import { GetStaticPaths, GetStaticProps } from "next";
import { renderContent } from "@/src/lib/helpers";
import Banner from "@/components/blocks/Banner";
import Card from "@/components/common/Card";

export default function Page({ event }: any) {
  const { date } = event.eventFields;

  return (
    <div>
      <Banner title={event.title} />
      <div className="bg-grey-100 py-12">
        <div className="container-md mx-auto">
          <article>
            <Card className="copy p-8">
              <p>{date}</p>
              {renderContent(event.content)}
            </Card>
          </article>
        </div>
      </div>
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
