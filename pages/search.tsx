import Banner from "@/components/blocks/Banner";
import LinkButton from "@/components/common/LinkButton";
import { getGlobal, getSearchResults } from "@/src/lib/api";
import { GetStaticProps } from "next";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { Url } from "next/dist/shared/lib/router/router";

type ResultType = {
  id: string;
  title: string;
  link: Url;
};

export default function Page() {
  const [results, setResults] = useState<ResultType[]>([]);
  const searchParams = useSearchParams();

  const loadResults = async () => {
    let q = searchParams?.get("q");

    if (!q) {
      return;
    }

    setResults(await getSearchResults(q));
  };

  useEffect(() => {
    loadResults();
  });

  return (
    <div>
      <Banner title="Search" />
      <div className="bg-grey-100 py-12">
        <div className={`container-md mx-auto`}>
          <div className="flex gap-4 justify-center">
            {results.map((result) => (
              <LinkButton href={result.link}>{result.title}</LinkButton>
            ))}
          </div>
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
