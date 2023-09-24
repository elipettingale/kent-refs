import { getPageBySlug } from "@/src/lib/api";
import { PageType } from "@/src/lib/types";
import { GetStaticProps } from "next";

interface Props {
	page: ContactUsPageType
}

interface ContactUsPageType extends PageType {
  contactUsFields: {
    foo: string;
  };
}

export default function Page({ page }: Props) {
  const { foo } = page.contactUsFields;

  return (
    <div>
      <h1>{page.title}</h1>
      <div>
        <p>Foo: {foo}</p>
        {/* <p>Address: {address}</p>
        <p>Phone Number: {phoneNumber}</p>
        <p>Email: {email}</p> */}
      </div>
    </div>
  );
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const page = await getPageBySlug(
    "contact-us",
    `contactUsFields {
        foo
    }`
  );

  return {
    props: {
      page: page,
    },
    revalidate: 10,
  };
};
