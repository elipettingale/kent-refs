import Banner from "@/components/blocks/Banner";
import Gallery from "@/components/blocks/Gallery";
import Steps from "@/components/blocks/Steps";
import { getGlobal, getPageBySlug } from "@/src/lib/api";
import { renderContent } from "@/src/lib/helpers";
import { MediaType, PageType } from "@/src/lib/types";
import { GetStaticProps } from "next";

interface Props {
  page: HomePageType;
}

interface HomePageType extends PageType {
  homeFields: {
    banner: any;
    steps: any[];
    gallery: MediaType[];
  };
}

export default function Page({ page }: Props) {
  let fields = page.homeFields;
  console.log(fields);

  return (
    <div>
      <Banner {...fields.banner} />
      <Steps className="translate-y-[-50%]" steps={fields.steps} />
      <div className="container mx-auto">
        <Gallery images={fields.gallery} />
      </div>
      <h1 className="text-4xl">{page.title}</h1>
      {renderContent(page.content)}
    </div>
  );
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const global = await getGlobal();
  const page = await getPageBySlug(
    "/home",
    `
		homeFields {
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
		}
	`
  );

  return {
    props: {
      global: global,
      page: page,
      seo: page?.seo,
    },
    revalidate: 10,
  };
};
