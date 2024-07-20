import FullBanner from "@/components/blocks/FullBanner";
import Gallery from "@/components/blocks/Gallery";
import LatestNewsAndEvents from "@/components/blocks/LatestNewsAndEvents";
import LatestTweets from "@/components/blocks/LatestTweets";
import Steps from "@/components/blocks/Steps";
import LinesIcon from "@/components/common/LinesIcon";
import {
  getLatestTweets,
  getPageBySlug,
  getPageSEOBySlug,
  getPosts,
  getUpcomingEvents,
} from "@/src/lib/api";
import { metadata } from "@/src/lib/helpers";

export default async function Page() {
  const latestNews = await getPosts(
    "posts",
    { first: 2 },
    `
      postFields {
        facebookUrl
      }
    `
  );
  const upcomingEvents = await getUpcomingEvents();
  const tweets = await getLatestTweets();
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

  let fields = page.homeFields;

  return (
    <div>
      <FullBanner {...fields.banner} />
      <Steps className="translate-y-[-50%]" steps={fields.steps} />
      <div className="container-lg mx-auto mb-12">
        <Gallery images={fields.gallery} />
      </div>
      <div className="bg-grey-100 py-12">
        <div className="container-lg mx-auto">
          <LatestNewsAndEvents posts={latestNews} events={upcomingEvents} />
        </div>
      </div>
      <div
        style={{
          backgroundImage: `url(${fields.social.backgroundImage.sourceUrl})`,
          backgroundSize: "cover",
        }}
      >
        <div className="bg-[rgba(0,0,0,0.75)]">
          <div className="container-lg mx-auto py-12">
            <p className="text-4xl text-white font-roboto mb-12">
              <LinesIcon color="white" /> Recent Tweets
            </p>
            <LatestTweets tweets={tweets.edges} />
          </div>
        </div>
      </div>
    </div>
  );
}

export async function generateMetadata({ params }: any) {
  const seo = await getPageSEOBySlug('/home');
  return metadata(seo);
}
