import Banner from "@/components/blocks/Banner";
import Card from "@/components/common/Card";

export default function Error404() {
  return (
    <div>
      <Banner title="404: Not Found" />
      <div className="bg-grey-100 py-12">
        <div className={`container-sm mx-auto`}>
          <Card className="copy p-8 text-center">
            <p>Sorry, we could not find what you were looking for.</p>
          </Card>
        </div>
      </div>
    </div>
  );
}

export async function generateMetadata({ params }: any) {
  return {
    title: '404'
  }
}
