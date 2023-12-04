import {
  getAllPosts,
  getGlobal,
  getPageBySlug,
  getPosts,
  getUpcomingEvents,
} from "@/src/lib/api";
import { GetStaticProps } from "next";
import useLoadMorePosts from "@/src/hooks/useLoadMorePosts";
import { PageType, PaginatedPostsType } from "@/src/lib/types";
import Link from "next/link";
import Banner from "@/components/blocks/Banner";
import Card from "@/components/common/Card";
import { clone, renderContent, renderHTML } from "@/src/lib/helpers";
import Image from "@/components/common/Image";
import LinesIcon from "@/components/common/LinesIcon";

interface Props {
  page: PageType;
  events: any;
}

export default function Page({ page, events }: Props) {
  const { container } = page.pageFields;

  const firstEvent = clone(events.edges[0]).node;
  const otherEvents = clone(events.edges.slice(1));

  return (
    <div>
      <Banner title={page.title} />
      <div className="bg-grey-100 py-12">
        <div className={`container-${container} mx-auto`}>
          {page.content && (
            <Card className="flex-1 copy p-8">
              {renderContent(page.content)}
            </Card>
          )}

          <div className="md:grid grid-cols-2 gap-4">
            <div>
              <Link
                key={firstEvent.id}
                href={firstEvent.link}
                className="block mt-6"
              >
                <Card>
                  <div className="relative aspect-[6/3]">
                    <Image
                      src={firstEvent.featuredImage.node.sourceUrl}
                      alt={firstEvent.featuredImage.node.altText}
                      fill
                    />
                  </div>

                  <div className="p-6">
                    <p className="text-2xl font-roboto">{firstEvent.title}</p>
                    <p className="text-grey mb-4">
                      {firstEvent.eventFields.date} @{" "}
                      {firstEvent.eventFields.time}
                    </p>
                    <div className="italic">
                      <p className="text-blue font-bold">
                        {firstEvent.eventFields.venue}
                      </p>
                      {renderHTML(firstEvent.eventFields.address)}
                    </div>
                  </div>
                </Card>
              </Link>
            </div>
            <div>
              {otherEvents.map(({ node: event }: any, index: any) => (
                <Link key={event.id} href={event.link} className="block mt-6">
                  <Card className="flex">
                    <div className="relative aspect-square flex-1">
                      <Image
                        src={event.featuredImage.node.sourceUrl}
                        alt={event.featuredImage.node.altText}
                        fill
                      />
                    </div>

                    <div className="p-6 flex-[2]">
                      <p className="text-2xl font-roboto">{event.title}</p>
                      <p className="text-grey mb-4">
                        {event.eventFields.date} @ {event.eventFields.time}
                      </p>
                      {event.eventFields.venue && (
                        <div className="flex items-center italic text-blue font-bold text-sm">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={20}
                            height={20}
                            fill="none"
                            viewBox="0 0 24 24"
                            className="mr-1 stroke-blue"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M12 21c3.5-3.6 7-6.824 7-10.8C19 6.224 15.866 3 12 3s-7 3.224-7 7.2 3.5 7.2 7 10.8Z"
                            />
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M12 13a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
                            />
                          </svg>
                          {event.eventFields.venue}
                        </div>
                      )}
                    </div>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const global = await getGlobal();
  const page = await getPageBySlug(
    "/events",
    `
      pageFields {
        container
      }
    `
  );

  const events = await getUpcomingEvents(100);

  return {
    props: {
      global: global,
      page: page,
      seo: page?.seo,
      events: events,
    },
    revalidate: 10,
  };
};
