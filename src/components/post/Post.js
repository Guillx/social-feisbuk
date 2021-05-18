import "./Post.css";
import { MoreVert } from "@material-ui/icons";

/* FOTOS POSTS */
import fotoPerfilPost1 from "../../assets/images/personas/pers1.jpg";
import fotoPerfilPost2 from "../../assets/images/personas/pers6.jpg";
import fotoPerfilPost3 from "../../assets/images/personas/pers10.jpg";
import fotoPerfilPost4 from "../../assets/images/personas/pers5.jpg";

import like1 from "../../assets/images/like.png";
import like2 from "../../assets/images/heart.png";

import post1 from "../../assets/images/posts/post1.jpg";
import post2 from "../../assets/images/posts/post2.jpg";
import post3 from "../../assets/images/posts/post3.jpg";
import post4 from "../../assets/images/posts/post4.jpg";

export default function Post() {
  return (
    <>
      {/* POST 1 */}
      <div className="post">
        <div className="post-wrapper">
          <div className="post-top">
            <div className="post-topleft">
              <img
                src={fotoPerfilPost1}
                className="post-profile-pic"
                alt=""
              ></img>
              <span className="post-username">Rebeca García</span>
              <span className="post-date">hace 7 minutos</span>
            </div>
            <div className="post-topright">
              <MoreVert></MoreVert>
            </div>
          </div>

          <div className="post-center">
            <span className="post-text">De paseo con Luna 🐾</span>
            <img className="post-img" src={post2} alt=""></img>
          </div>

          <div className="post-bottom">
            <div className="post-bottomleft">
              <img className="like-icon" src={like1} alt=""></img>
              <img className="like-icon" src={like2} alt=""></img>
              <span className="post-like-counter">32 me gusta</span>
            </div>
            <div className="post-bottomright">
              <span className="post-comment-text">9 comentarios</span>
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
                src={fotoPerfilPost2}
                className="post-profile-pic"
                alt=""
              ></img>
              <span className="post-username">Miguel Sánchez</span>
              <span className="post-date">hace 9 minutos</span>
            </div>
            <div className="post-topright">
              <MoreVert></MoreVert>
            </div>
          </div>

          <div className="post-center">
            <span className="post-text">¡Día de montaña! 🐺⛰</span>
            <img className="post-img" src={post1} alt=""></img>
          </div>

          <div className="post-bottom">
            <div className="post-bottomleft">
              <img className="like-icon" src={like1} alt=""></img>
              <img className="like-icon" src={like2} alt=""></img>
              <span className="post-like-counter">12 me gusta</span>
            </div>
            <div className="post-bottomright">
              <span className="post-comment-text">2 comentarios</span>
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
                src={fotoPerfilPost3}
                className="post-profile-pic"
                alt=""
              ></img>
              <span className="post-username">Gorka Urribari</span>
              <span className="post-date">hace 16 minutos</span>
            </div>
            <div className="post-topright">
              <MoreVert></MoreVert>
            </div>
          </div>

          <div className="post-center">
            <span className="post-text">¡En buena compañía! 🤩</span>
            <img className="post-img" src={post3} alt=""></img>
          </div>

          <div className="post-bottom">
            <div className="post-bottomleft">
              <img className="like-icon" src={like1} alt=""></img>
              <img className="like-icon" src={like2} alt=""></img>
              <span className="post-like-counter">67 me gusta</span>
            </div>
            <div className="post-bottomright">
              <span className="post-comment-text">21 comentarios</span>
            </div>
          </div>
        </div>
      </div>

      {/* POST 4 */}
      <div className="post">
        <div className="post-wrapper">
          <div className="post-top">
            <div className="post-topleft">
              <img
                src={fotoPerfilPost4}
                className="post-profile-pic"
                alt=""
              ></img>
              <span className="post-username">Romina Andrade</span>
              <span className="post-date">hace 32 minutos</span>
            </div>
            <div className="post-topright">
              <MoreVert></MoreVert>
            </div>
          </div>

          <div className="post-center">
            <span className="post-text">Family first 💓💓💓</span>
            <img className="post-img" src={post4} alt=""></img>
          </div>

          <div className="post-bottom">
            <div className="post-bottomleft">
              <img className="like-icon" src={like1} alt=""></img>
              <img className="like-icon" src={like2} alt=""></img>
              <span className="post-like-counter">12 me gusta</span>
            </div>
            <div className="post-bottomright">
              <span className="post-comment-text">4 comentarios</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
