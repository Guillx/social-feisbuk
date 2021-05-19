import PostProfile from "../postprofile/PostProfile";

import "./FeedProfile.css";
// import { Posts } from "../../TestData";

export default function Feed() {
  return (
    <div className="feed">
      <div className="feed-wrapper">
        <PostProfile></PostProfile>
      </div>
    </div>
  );
}
