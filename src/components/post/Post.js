import "./Post.css";
import { MoreVert } from "@material-ui/icons";
import { Users } from "../../TestData";

import { useState } from "react";

export default function Post({ post }) {
  const [likes, setLikes] = useState(post.likes);
  const [isLiked, setIsLiked] = useState(false);

  const likeHandler = () => {
    setLikes(isLiked ? likes - 1 : likes + 1);
    setIsLiked(!isLiked);
  };

  return (
    <>
      <div className="post">
        <div className="post-wrapper">
          <div className="post-top">
            <div className="post-topleft">
              <img
                src={Users.filter((u) => u.id === post.userId)[0].profilePic}
                className="post-profile-pic"
                alt=""
              ></img>
              <span className="post-username">
                {Users.filter((u) => u.id === post.userId)[0].userName}
              </span>
              <span className="post-date">{post.date}</span>
            </div>
            <div className="post-topright">
              <MoreVert></MoreVert>
            </div>
          </div>

          <div className="post-center">
            <span className="post-text">{post?.text}</span>
            <span className="hashtag">{post.hashtags}</span>
            <img className="post-img" src={post.photo} alt=""></img>
          </div>

          <div className="post-bottom">
            <div className="post-bottomleft">
              <img
                className="like-icon"
                onClick={likeHandler}
                src="assets/images/like.png"
                alt=""
              ></img>
              <img
                className="like-icon"
                onClick={likeHandler}
                src="assets/images/heart.png"
                alt=""
              ></img>
              <span className="post-like-counter">{likes} me gusta</span>
            </div>
            <div className="post-bottomright">
              <span className="post-comment-text">
                {post.comentarios} comentarios
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
