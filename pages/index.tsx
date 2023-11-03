import Banner from "@/components/common/Banner";
import Steps from "@/components/common/Steps";
import { getGlobal, getPageBySlug } from "@/src/lib/api";
import { renderContent } from "@/src/lib/helpers";
import { PageType } from "@/src/lib/types";
import { GetStaticProps } from "next";

interface Props {
  page: HomePageType;
}

interface HomePageType extends PageType {
  homeFields: {
    banner: any;
    steps: any[];
  };
}

export default function Page({ page }: Props) {
  let fields = page.homeFields;
  console.log(fields);

  return (
    <div>
      <Banner {...fields.banner} />
      <Steps className="translate-y-[-50%]" steps={fields.steps} />
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
					...mediaItem
				}
				titleTop
				titleBottom
			}
			steps {
				title
				description
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
