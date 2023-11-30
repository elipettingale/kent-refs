import Card from "@/components/common/Card";
import Image from "@/components/common/Image";
import LinkButton from "@/components/common/LinkButton";
import { date, renderContent } from "@/src/lib/helpers";
import { PaginatedPostsType } from "@/src/lib/types";
import Link from "next/link";

interface Props {
  posts: PaginatedPostsType;
  events: PaginatedPostsType;
}

export default function LatestNewsAndEvents({ posts, events }: Props) {
  return (
    <div className="flex py-4">
      <div className="w-[65%] flex flex-col gap-8 mr-8">
        <p className="text-4xl font-roboto">Latest News</p>
        {posts.edges.map(({ node: post }: any) => (
          <Card key={post.id} className="flex">
            <div className="w-[45%] relative aspect-square">
              <Image
                src={post.featuredImage.node.mediaItemUrl}
                alt={post.featuredImage.node.altText}
                fill
              />
            </div>
            <div className="w-[55%] p-8">
              <div className="flex flex-col gap-2 mb-6">
                <p className="text-3xl font-roboto">{post.title}</p>
                <p className="text-lg text-grey">{date(post.date)}</p>
                <div className="text-lg">{renderContent(post.excerpt)}</div>
              </div>

              <LinkButton href={post.link} className="w-fit">
                Read More
              </LinkButton>
            </div>
          </Card>
        ))}
      </div>
      <div className="w-[35%] flex flex-col gap-8">
        <p className="text-4xl font-roboto">Upcoming Events</p>
        {events.edges.map(({ node: event }: any, index) => (
          <Link href={event.link}>
            <Card key={event.id} className="flex flex-col">
              {index === 0 && (
                <div className="relative aspect-[5/3]">
                  <Image
                    src={event.featuredImage.node.mediaItemUrl}
                    alt={event.featuredImage.node.altText}
                    fill
                  />
                </div>
              )}
              <div className="p-6">
                <p className="text-2xl font-roboto">{event.title}</p>
                <p className="text-grey mb-4">
                  {event.eventFields.date} @ {event.eventFields.time}
                </p>
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
              </div>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}
