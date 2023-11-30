import { useState } from "react";
import { PaginatedPostType, PaginatedPostsType } from "../lib/types";
import { getPosts } from "../lib/api";

type Return = [
  [{ node: PaginatedPostType }],
  boolean,
  boolean,
  () => Promise<void>
];

export default function useLoadMorePosts(
  postType: string,
  { edges, pageInfo }: PaginatedPostsType
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

    const posts = await getPosts(postType, { after: cursor as string });

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
