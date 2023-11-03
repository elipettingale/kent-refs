import { getGlobal, getPageBySlug } from "@/src/lib/api";
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
  const { foo } = page.contactUsFields;

  console.log(foo);

  return (
    <div>
      <h1>{page.title}</h1>
      <div>
        <p>{foo}</p>
      </div>
    </div>
  );
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const global = await getGlobal();
  const page = await getPageBySlug(
    "/contact-us",
    `contactUsFields {
        bar
        foo {
          ...media
        }
    }`
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
