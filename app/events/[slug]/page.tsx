import { getAllPosts, getPostBySlug } from "@/src/lib/api";
import { renderContent, renderHTML } from "@/src/lib/helpers";
import Banner from "@/components/blocks/Banner";
import Card from "@/components/common/Card";
import Image from "@/components/common/Image";
import PhoneIcon from "@/components/common/PhoneIcon";
import { notFound } from "next/navigation";

export default async function Page({ params }: any) {
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

  if (!event) {
    return notFound();
  }

  const { date, time, venue, phone, address } = event.eventFields;

  return (
    <div>
      <Banner title={event.title} />
      <div className="bg-grey-100 py-12">
        <div className="container-sm mx-auto">
          <Card className="p-8">
            <div className="md:flex gap-8">
              <div className="flex-1">
                <p className="text-4xl  font-roboto mb-2">{date}</p>
                <p className="text-2xl text-grey-800 mb-4">{time}</p>
                {venue && (
                  <div className="mb-6">
                    <p className="text-2xl font-roboto text-blue ">Venue</p>
                    <div className="italic">
                      <p>{venue}</p>
                      <p>{renderHTML(address)}</p>
                    </div>
                  </div>
                )}
                {phone && (
                  <div className="mb-1">
                    <PhoneIcon fill="blue" size={25} /> {phone}
                  </div>
                )}
              </div>
              <div className="flex-1 mt-6 md:mt-0">
                <div className="relative aspect-[5/4] rounded overflow-hidden">
                  <Image
                    src={event.featuredImage.node.sourceUrl}
                    alt={event.featuredImage.node.altText}
                    fill
                  />
                </div>
              </div>
            </div>
            {event.content && (
              <div className="copy mt-6">{renderContent(event.content)}</div>
            )}
          </Card>
        </div>
      </div>
    </div>
  );
}

export async function generateStaticParams() {
  const posts = await getAllPosts("events");

  return posts.map((post: any) => {
    slug: post.node.slug
  });
}
