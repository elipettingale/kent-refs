import CalendarIcon from "@/components/common/CalendarIcon";
import Card from "@/components/common/Card";
import Image from "@/components/common/Image";
import LinesIcon from "@/components/common/LinesIcon";
import LinkButton from "@/components/common/LinkButton";
import { BEM, date, renderContent } from "@/src/lib/helpers";
import { PaginatedPostsType } from "@/src/lib/types";
import Link from "next/link";
import styles from "./index.module.css";

interface Props {
  posts: PaginatedPostsType;
  events: PaginatedPostsType;
}

export default function LatestNewsAndEvents({ posts, events }: Props) {
  return (
    <div className="lg:flex py-4">
      <div className="lg:w-[65%] flex flex-col gap-8 mb-8 lg:mr-8 lg:mb-0">
        <p className="text-4xl font-roboto">
          <LinesIcon /> Latest News
        </p>
        {posts.edges.map(({ node: post }: any) => (
          <Link
            key={post.id}
            href="https://www.facebook.com/kentrefs/?locale=en_GB"
            target="_blank"
            className={styles.Card}
          >
            <Card className="flex flex-col lg:flex-row">
              <div className="lg:w-[45%] aspect-[5/3] relative lg:aspect-square">
                <Image
                  src={post.featuredImage.node.sourceUrl}
                  alt={post.featuredImage.node.altText}
                  fill
                />
              </div>
              <div className="lg:w-[55%] p-8">
                <div className="flex flex-col gap-2 mb-6 relative">
                  <p className="text-3xl font-roboto">{post.title}</p>
                  <div className="text-lg">{renderContent(post.excerpt)}</div>
                  <div className="absolute bottom-0 right-0 p-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={50}
                      height={50}
                      viewBox="0 0 24 24"
                      className="fill-grey-100"
                    >
                      <path d="M12 2.04c-5.5 0-10 4.49-10 10.02 0 5 3.66 9.15 8.44 9.9v-7H7.9v-2.9h2.54V9.85c0-2.51 1.49-3.89 3.78-3.89 1.09 0 2.23.19 2.23.19v2.47h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.45 2.9h-2.33v7a10 10 0 0 0 8.44-9.9c0-5.53-4.5-10.02-10-10.02Z" />
                    </svg>
                  </div>
                </div>
              </div>
            </Card>
          </Link>
        ))}
      </div>
      <div className="lg:w-[35%] flex flex-col gap-8">
        <p className="text-4xl font-roboto">
          <LinesIcon /> Upcoming Events
        </p>
        {events.edges.map(({ node: event }: any, index) => (
          <Link key={event.id} href={event.link} className={styles.Card}>
            <Card
              className={BEM(styles, "Event", {
                isNotFirst: index !== 0,
              })}
            >
              {index === 0 && (
                <div className="relative aspect-[5/3]">
                  <Image
                    src={event.featuredImage.node.sourceUrl}
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
