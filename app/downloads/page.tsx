import Banner from "@/components/blocks/Banner";
import Card from "@/components/common/Card";
import Downloads from "@/components/common/Downloads";
import { getAllPosts, getPageBySlug, getPageSEOBySlug } from "@/src/lib/api";
import { metadata, renderContent } from "@/src/lib/helpers";

export default async function Page() {
  const page = await getPageBySlug("/downloads");
  const downloads = await getAllPosts(
    "downloads",
    `
      id
      title
      downloadFields {
        description
        section
        document {
          mediaItemUrl
          mimeType
        }
      }
    `
  );

  return (
    <div>
      <Banner title={page.title} />
      <div className="bg-grey-100 py-12">
        <div className="container-sm mx-auto">
          <Card className="p-8">
            {page.content && (
              <div className="copy mb-8">{renderContent(page.content)}</div>
            )}
            <Downloads downloads={downloads} />
          </Card>
        </div>
      </div>
    </div>
  );
}

export async function generateMetadata({ params }: any) {
  const seo = await getPageSEOBySlug('/downloads');
  return metadata(seo);
}
