import Banner from "@/components/blocks/Banner";
import Gallery from "@/components/blocks/Gallery";
import LatestNews from "@/components/blocks/LatestNews";
import Steps from "@/components/blocks/Steps";
import { getGlobal, getPageBySlug, getPosts } from "@/src/lib/api";
import { renderContent } from "@/src/lib/helpers";
import { MediaType, PageType, PostType } from "@/src/lib/types";
import { GetStaticProps } from "next";

interface Props {
  page: HomePageType;
  latestNews: PostType[];
}

interface HomePageType extends PageType {
  homeFields: {
    banner: any;
    steps: any[];
    gallery: MediaType[];
  };
}

export default function Page({ page, latestNews }: Props) {
  let fields = page.homeFields;

  console.log(latestNews);

  return (
    <div>
      <Banner {...fields.banner} />
      <Steps className="translate-y-[-50%]" steps={fields.steps} />
      <div className="container mx-auto mb-12">
        <Gallery images={fields.gallery} />
      </div>
      <div className="bg-grey-100 py-12">
        <div className="container mx-auto">
          <p className="text-4xl font-roboto">Latest News</p>
          <div className="py-6">
            <LatestNews posts={latestNews} />
          </div>
        </div>
      </div>
    </div>
  );
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const global = await getGlobal();
  const latestNews = await getPosts("posts", { first: 4 });
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
		}`
  );

  return {
    props: {
      global: global,
      page: page,
      seo: page?.seo,
      latestNews: latestNews,
    },
    revalidate: 10,
  };
};
