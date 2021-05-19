import "./PostProfile.css";
import { MoreVert } from "@material-ui/icons";

export default function PostProfile() {
  return (
    <>
      {/* POST 1 */}
      <div className="post">
        <div className="post-wrapper">
          <div className="post-top">
            <div className="post-topleft">
              <img
                src="assets/images/personas/pers8.jpg"
                className="post-profile-pic"
                alt=""
              ></img>
              <span className="post-username">Guille Gil</span>
              <span className="post-date">hace 4 horas</span>
            </div>
            <div className="post-topright">
              <MoreVert></MoreVert>
            </div>
          </div>

          <div className="post-center">
            <span className="post-text">Visitando Berlín.</span>
            <span className="hashtag">#muroDeBerlin #kiss</span>
            <img
              className="post-img"
              src="assets/images/myposts/mypost1.jpg"
              alt=""
            ></img>
          </div>

          <div className="post-bottom">
            <div className="post-bottomleft">
              <img
                className="like-icon"
                src="assets/images/like.png"
                alt=""
              ></img>
              <img
                className="like-icon"
                src="assets/images/heart.png"
                alt=""
              ></img>
              <span className="post-like-counter">15 me gusta</span>
            </div>
            <div className="post-bottomright">
              <span className="post-comment-text">2 comentarios</span>
            </div>
          </div>
        </div>
      </div>

      {/* POST 2 */}
      <div className="post">
        <div className="post-wrapper">
          <div className="post-top">
            <div className="post-topleft">
              <img
                src="assets/images/personas/pers8.jpg"
                className="post-profile-pic"
                alt=""
              ></img>
              <span className="post-username">Guille Gil</span>
              <span className="post-date">hace 3 días</span>
            </div>
            <div className="post-topright">
              <MoreVert></MoreVert>
            </div>
          </div>

          <div className="post-center">
            <span className="post-text">🌳🌲</span>
            <span className="hashtag">#nature</span>
            <img
              className="post-img"
              src="assets/images/myposts/mypost2.jpg"
              alt=""
            ></img>
          </div>

          <div className="post-bottom">
            <div className="post-bottomleft">
              <img
                className="like-icon"
                src="assets/images/like.png"
                alt=""
              ></img>
              <img
                className="like-icon"
                src="assets/images/heart.png"
                alt=""
              ></img>
              <span className="post-like-counter">54 me gusta</span>
            </div>
            <div className="post-bottomright">
              <span className="post-comment-text">7 comentarios</span>
            </div>
          </div>
        </div>
      </div>

      {/* POST 3 */}
      <div className="post">
        <div className="post-wrapper">
          <div className="post-top">
            <div className="post-topleft">
              <img
                src="assets/images/personas/pers8.jpg"
                className="post-profile-pic"
                alt=""
              ></img>
              <span className="post-username">Guille Gil</span>
              <span className="post-date">hace 9 días</span>
            </div>
            <div className="post-topright">
              <MoreVert></MoreVert>
            </div>
          </div>

          <div className="post-center">
            <span className="post-text">🐘 🐘 🐘</span>

            <img
              className="post-img"
              src="assets/images/myposts/mypost3.jpg"
              alt=""
            ></img>
          </div>

          <div className="post-bottom">
            <div className="post-bottomleft">
              <img
                className="like-icon"
                src="assets/images/like.png"
                alt=""
              ></img>
              <img
                className="like-icon"
                src="assets/images/heart.png"
                alt=""
              ></img>
              <span className="post-like-counter">67 me gusta</span>
            </div>
            <div className="post-bottomright">
              <span className="post-comment-text">21 comentarios</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
