import Card from "@/components/common/Card";
import Image from "@/components/common/Image";
import LinkButton from "@/components/common/LinkButton";
import { clone, renderContent } from "@/src/lib/helpers";
import { PaginatedPostsType, PostType } from "@/src/lib/types";

interface Props {
  posts: PaginatedPostsType;
}

export default function LatestNews({ posts }: Props) {
  console.log("posts", posts);
  const leftPosts = posts.edges.slice(0, 2);
  const rightPosts = posts.edges.slice(2, 4);

  console.log(rightPosts);

  return (
    <div className="flex">
      <div className="w-[65%] flex flex-col gap-8 mr-8">
        {leftPosts.map(({ node: post }) => (
          <Card key={post.id} className="flex">
            <div className="w-[45%] relative aspect-square">
              <Image mediaItem={post.featuredImage.node} fill />
            </div>
            <div className="w-[55%] p-8">
              <div className="flex flex-col gap-2 mb-6">
                <p className="text-3xl font-roboto">{post.title}</p>
                <p className="text-lg text-grey">27th June, 2020</p>
                <div className="text-lg">{renderContent(post.excerpt)}</div>
              </div>

              <LinkButton href={post.link} className="w-fit">
                Read More
              </LinkButton>
            </div>
          </Card>
        ))}
      </div>
      <div className="w-[35%] flex flex-col gap-8">
        {rightPosts.map(({ node: post }) => (
          <Card key={post.id} className="flex flex-col">
            <div className="relative aspect-[5/3]">
              <Image mediaItem={post.featuredImage.node} fill />
            </div>
            <div className="p-6">
              <p className="text-2xl font-roboto">{post.title}</p>
              <p className="text-grey">27th June, 2020</p>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
