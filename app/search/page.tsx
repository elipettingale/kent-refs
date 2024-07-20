import Banner from "@/components/blocks/Banner";
import SearchResults from "@/components/common/SearchResults";
import { Suspense } from "react";

export default function Page() {
  return (
    <div>
      <Banner title="Search" />
      <div className="bg-grey-100 py-24">
        <div className={`container-sm mx-auto`}>
          <div className="flex flex-wrap gap-4 justify-center">
            <Suspense>
              <SearchResults />
            </Suspense>
          </div>
        </div>
      </div>
    </div>
  );
}

export async function generateMetadata() {
  return {
    title: 'Search'
  };
}
