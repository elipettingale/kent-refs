import Banner from "@/components/blocks/Banner";
import Card from "@/components/common/Card";
import { getGlobal } from "@/src/lib/api";
import { GetStaticProps } from "next";

export default function Error404() {
  return (
    <div>
      <Banner title="404: Not Found" />
      <div className="bg-grey-100 py-12">
        <div className={`container-sm mx-auto`}>
          <Card className="copy">
            <p>Sorry, we couldn't find what you were looking for.</p>
          </Card>
        </div>
      </div>
    </div>
  );
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const global = await getGlobal();

  return {
    props: {
      global: global,
    },
    revalidate: 10,
  };
};
