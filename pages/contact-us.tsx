import { getACFPageBySlug, getGlobal } from "@/src/lib/api";
import { GetStaticProps } from "next";

export default function Page({ page }: any) {
  const { address, phoneNumber, email } = page.contactUsFields;

  return (
    <div>
      <h1>{page.title}</h1>
      <div>
        <p>Address: {address}</p>
        <p>Phone Number: {phoneNumber}</p>
        <p>Email: {email}</p>
      </div>
    </div>
  );
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const page = await getACFPageBySlug(
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
