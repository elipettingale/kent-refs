import Banner from "@/components/blocks/Banner";
import GravityForm from "@/components/blocks/GravityForm";
import Card from "@/components/common/Card";
import { getPageBySlug, getPageSEOBySlug } from "@/src/lib/api";
import { renderContent } from "@/src/lib/helpers";

export default async function Page() {
  const page = await getPageBySlug(
    "/contact-us",
    `
      pageFields {
        container
      }
    `
  );

  const { container } = page.pageFields;

  return (
    <div>
      <Banner title={page.title} />
      <div className="bg-grey-100 py-12">
        <div className={`container-${container} mx-auto`}>
          <div className="md:flex gap-8">
            <Card className="flex-1 copy p-8 mb-8 md:mb-0">
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

export async function generateMetadata() {
  const seo = await getPageSEOBySlug("/contact-us");

  return {
    title: seo.title,
    description: seo.metaDesc,
    openGraph: {
      title: seo.opengraphTitle,
      description: seo.opengraphDescription
    }
  };
}
