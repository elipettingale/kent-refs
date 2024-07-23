import Banner from "@/components/blocks/Banner";
import Card from "@/components/common/Card";
import Laws from "@/components/common/Laws";
import { getAllPostsForTaxonomy, getPageBySlug } from "@/src/lib/api";
import { renderContent } from "@/src/lib/helpers";

export default async function Page() {
  const page = await getPageBySlug("/law-clarifications");
  const laws = await getAllPostsForTaxonomy(
    "laws",
    "lawTypeSlug",
    "law-clarifications",
    `
      id
      title
      link
    `
  );

  return (
    <div>
      <Banner title={page.title} />
      <div className="bg-grey-100 py-12">
        <div className="container-md mx-auto">
          <Card className="p-8">
            <div className="copy mb-8">{renderContent(page.content)}</div>
            <Laws laws={laws} />
          </Card>
        </div>
      </div>
    </div>
  );
}
