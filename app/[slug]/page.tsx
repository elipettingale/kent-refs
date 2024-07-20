import { getAllPages, getPageBySlug, getPageSEOBySlug } from "@/src/lib/api";
import { metadata, renderMultiContent } from "@/src/lib/helpers";
import Banner from "@/components/blocks/Banner";
import { notFound } from "next/navigation";

export default async function Page({ params }: any) {
  const page = await getPageBySlug(
    params?.slug as string,
    `pageFields {
      container
    }`
  );

  if (!page) {
    return notFound();
  }

  const fields = page.pageFields;

  return (
    <div>
      <Banner title={page.title} />
      <div className="bg-grey-100 py-12">
        <div className={`container-${fields.container} mx-auto`}>
          <article>{renderMultiContent(page.content)}</article>
        </div>
      </div>
    </div>
  );
}

export async function generateMetadata({ params }: any) {
  const seo = await getPageSEOBySlug(params?.slug);
  return metadata(seo);
}

export async function generateStaticParams() {
  const data = await getAllPages();

  let pages = data.filter((page: any) => {
    return (
      page.node.template.templateName === "Default" && !page.node.isFrontPage
    );
  });

  return pages.map(({ node }: any) => {
    return {
      slug: node.slug
    }
  });
}
