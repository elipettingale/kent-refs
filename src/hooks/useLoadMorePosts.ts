import { useState } from "react";
import { PaginatedPostType, PaginatedPostsType } from "../lib/types";

type Return = [
  [{ node: PaginatedPostType }],
  boolean,
  boolean,
  () => Promise<void>
];

export default function useLoadMorePosts(
  { edges, pageInfo }: PaginatedPostsType,
  apiFunction: any
): Return {
  const [posts, setPosts] = useState(edges);
  const [isLoading, setIsLoading] = useState(false);
  const [cursor, setCursor] = useState<string | null>(
    pageInfo.hasNextPage ? pageInfo.endCursor : null
  );

  const loadMore = async () => {
    if (isLoading) {
      return;
    }

    setIsLoading(true);

    const posts = await apiFunction(cursor as string);

    if (posts.pageInfo.hasNextPage) {
      setCursor(posts.pageInfo.endCursor);
    } else {
      setCursor(null);
    }

    setPosts((prev: any) => {
      return prev.concat(posts.edges);
    });

    setIsLoading(false);
  };

  return [posts, isLoading, cursor !== null, loadMore];
}
