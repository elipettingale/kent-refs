import Banner from "@/components/blocks/Banner";
import GravityForm from "@/components/blocks/GravityForm";
import Card from "@/components/common/Card";
import { getGlobal, getPageBySlug } from "@/src/lib/api";
import { renderContent } from "@/src/lib/helpers";
import { PageType } from "@/src/lib/types";
import { GetStaticProps } from "next";

interface Props {
  page: ContactUsPageType;
}

interface ContactUsPageType extends PageType {
  contactUsFields: {
    foo: string;
  };
}

export default function Page({ page }: Props) {
  const { container } = page.pageFields;

  return (
    <div>
      <Banner title={page.title} />
      <div className="bg-grey-100 py-12">
        <div className={`container-${container} mx-auto`}>
          <div className="flex gap-8">
            <Card className="flex-1 copy p-8">
              {renderContent(page.content)}
            </Card>
            <Card className="flex-1 copy p-8">
              <p className="text-3xl font-roboto">Get In Touch</p>
              <GravityForm full={true} />
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const global = await getGlobal();
  const page = await getPageBySlug(
    "/contact-us",
    `
      pageFields {
        container
      }
      contactUsFields {
          bar
          foo {
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
