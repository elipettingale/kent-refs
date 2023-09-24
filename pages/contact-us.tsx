import { getPageBySlug } from "@/src/lib/api";
import { GetStaticProps } from "next";

export default function Page({ page }: any) {
  const { foo, address, phoneNumber, email } = page.contactUsDetails;

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
    `contactUsDetails {
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
