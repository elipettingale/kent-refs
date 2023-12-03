import { getAllPosts, getGlobal, getPostBySlug } from "@/src/lib/api";
import { GetStaticPaths, GetStaticProps } from "next";
import { renderContent, renderHTML } from "@/src/lib/helpers";
import Banner from "@/components/blocks/Banner";
import Card from "@/components/common/Card";
import LinesIcon from "@/components/common/LinesIcon";
import Image from "@/components/common/Image";
import PhoneIcon from "@/components/common/PhoneIcon";

export default function Page({ event }: any) {
  const { date, time, venue, phone, address } = event.eventFields;

  console.log(event);

  return (
    <div>
      <Banner title={event.title} />
      <div className="bg-grey-100 py-12">
        <div className="container-md mx-auto">
          <div className="flex gap-8">
            <div className="flex-1">
              <p className="text-4xl  font-roboto mb-2">{date}</p>
              <p className="text-2xl text-grey-800 mb-4">{time}</p>
              <div className="relative aspect-[5/4] rounded overflow-hidden">
                <Image
                  src={event.featuredImage.node.sourceUrl}
                  alt={event.featuredImage.node.altText}
                  fill
                />
              </div>
            </div>
            <div className="flex-1">
              <Card className="p-8">
                <div className="mb-6">
                  <p className="text-2xl font-roboto text-blue ">Venue</p>
                  <div className="italic">
                    <p>{venue}</p>
                    <p>{renderHTML(address)}</p>
                  </div>
                </div>
                {phone && (
                  <div className="mb-1">
                    <PhoneIcon fill="blue" size={25} /> {phone}
                  </div>
                )}
                {event.content && (
                  <div className="copy mt-4">
                    {renderContent(event.content)}
                  </div>
                )}
              </Card>
            </div>
          </div>
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
    featuredImage {
      node {
        ...media
      }
    }
    eventFields {
        date
        time
        venue
        phone
        address
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
