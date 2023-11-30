import FullBanner from "@/components/blocks/FullBanner";
import Gallery from "@/components/blocks/Gallery";
import LatestNewsAndEvents from "@/components/blocks/LatestNewsAndEvents";
import LatestTweets from "@/components/blocks/LatestTweets";
import Steps from "@/components/blocks/Steps";
import LinesIcon from "@/components/common/LinesIcon";
import {
  getGlobal,
  getPageBySlug,
  getPosts,
  getUpcomingEvents,
} from "@/src/lib/api";
import { MediaType, PageType, PaginatedPostsType } from "@/src/lib/types";
import { GetStaticProps } from "next";

interface Props {
  page: HomePageType;
  latestNews: PaginatedPostsType;
  upcomingEvents: PaginatedPostsType;
}

interface HomePageType extends PageType {
  homeFields: {
    banner: any;
    steps: any[];
    gallery: MediaType[];
    social: {
      backgroundImage: MediaType;
    };
  };
}

export default function Page({ page, latestNews, upcomingEvents }: Props) {
  let fields = page.homeFields;

  return (
    <div>
      <FullBanner {...fields.banner} />
      <Steps className="translate-y-[-50%]" steps={fields.steps} />
      <div className="container mx-auto mb-12">
        <Gallery images={fields.gallery} />
      </div>
      <div className="bg-grey-100 py-12">
        <div className="container mx-auto">
          <LatestNewsAndEvents posts={latestNews} events={upcomingEvents} />
        </div>
      </div>
      <div
        style={{
          backgroundImage: `url(${fields.social.backgroundImage.mediaItemUrl})`,
        }}
      >
        <div className="bg-[rgba(0,0,0,0.75)]">
          <div className="container mx-auto py-12">
            <p className="text-4xl text-white font-roboto mb-12">
              <LinesIcon /> Recent Tweets
            </p>
            <LatestTweets />
          </div>
        </div>
      </div>
    </div>
  );
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const global = await getGlobal();
  const latestNews = await getPosts("posts", { first: 2 });
  const upcomingEvents = await getUpcomingEvents();
  const page = await getPageBySlug(
    "/home",
    `homeFields {
			banner {
				backgroundImage {
					...media
				}
				titleTop
				titleBottom
			}
			steps {
				title
				description
        link {
          ...link
        }
			}
      gallery {
        ...media
      }
      social {
        backgroundImage {
          ...media
        }
      }
		}`
  );

  return {
    props: {
      global: global,
      page: page,
      seo: page?.seo,
      latestNews: latestNews,
      upcomingEvents: upcomingEvents,
    },
    revalidate: 10,
  };
};
