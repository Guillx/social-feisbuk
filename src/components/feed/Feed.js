import Post from "../post/Post";
import Share from "../share/Share";
import "./Feed.css";
import { Posts } from "../../TestData";

export default function Feed() {
  return (
    <div className="feed">
      <div className="feed-wrapper">
        <Share />
        {Posts.map((p) => (
          <Post key={p.id} post={p} />
        ))}
      </div>
    </div>
  );
}
