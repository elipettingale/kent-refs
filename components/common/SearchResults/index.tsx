'use client'

import LinkButton from "@/components/common/LinkButton";
import { getSearchResults } from "@/src/lib/api";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { Url } from "next/dist/shared/lib/router/router";

type ResultType = {
    id: string;
    title: string;
    link: Url;
};

export default function SearchResults() {
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
        <>
            {results.map((result) => (
            <LinkButton key={result.id} href={result.link}>
                {result.title}
            </LinkButton>
            ))}
        </>
    );
}
