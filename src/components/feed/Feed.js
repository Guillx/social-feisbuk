import Post from "../post/Post";
import Share from "../share/Share";
import "./Feed.css";

export default function Feed() {
  return (
    <div className="feed">
      <div className="feed-wrapper">
        <Share></Share>
        <Post></Post>
      </div>
    </div>
  );
}
