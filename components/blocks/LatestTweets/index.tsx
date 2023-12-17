import Tweet from "@/components/common/Tweet";
import styles from "./index.module.css";
import { date, renderHTML } from "@/src/lib/helpers";

interface Props {
  tweets: any[];
}

export default function LatestTweets({ tweets }: Props) {
  return (
    <div className="block md:flex gap-8">
      {tweets.map(({ node: tweet }, index) => (
        <Tweet
          key={tweet.id}
          className="block flex-1 mb-6"
          link="#"
          theme={index === 1 ? "blue" : "grey"}
          date={date(tweet.date)}
        >
          {renderHTML(tweet.content)}
        </Tweet>
      ))}
    </div>
  );
}
