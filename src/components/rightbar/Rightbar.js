import "./Rightbar.css";

import { Users } from "../../TestData";
import OnlineFriends from "../onlineFriends/OnlineFriends";

export default function Rightbar({ profile }) {
  const HomeRightbar = () => {
    return (
      <>
        <div className="birthday-container">
          <img
            className="birthday-img"
            src="assets/images/gift.png"
            alt=""
          ></img>
          <span className="birthday-text">
            <b>Óscar Milano</b> y otrxs <b>3 amigxs</b> están de cumpleaños
          </span>
        </div>
        <img
          className="rightbar-publi"
          src="assets/images/publicidad.jpg"
          alt=""
        ></img>
        <h4 className="rightbar-title">Conectadxs</h4>

        <ul className="rightbar-friendlist">
          {Users.map((u) => (
            <OnlineFriends key={u.id} user={u}></OnlineFriends>
          ))}
        </ul>
      </>
    );
  };

  const ProfileRightbar = () => {
    return (
      <>
        <h4 className="rightbar-title">Información</h4>
        <div className="rightbar-info">
          <div className="rightbar-info-item">
            <span className="rightbar-info-key">Vive en:</span>
            <span className="rightbar-info-value">Santiago de Compostela</span>
          </div>

          <div className="rightbar-info-item">
            <span className="rightbar-info-key">De:</span>
            <span className="rightbar-info-value">Laxe</span>
          </div>

          <div className="rightbar-info-item">
            <span className="rightbar-info-key">Relación:</span>
            <span className="rightbar-info-value">soltero</span>
          </div>
          <hr></hr>
        </div>
        <h4 className="rightbar-title">Seguidores (417)</h4>
        <div className="rightbar-followings">
          <div className="rightbar-following">
            <img
              className="rightbar-following-img"
              src="assets/images/personas/pers2.jpg"
              alt=""
            ></img>
            <span className="rightbar-following-name">Sandra Reyes</span>
          </div>

          <div className="rightbar-following">
            <img
              className="rightbar-following-img"
              src="assets/images/personas/pers5.jpg"
              alt=""
            ></img>
            <span className="rightbar-following-name">Romina Andrade</span>
          </div>

          <div className="rightbar-following">
            <img
              className="rightbar-following-img"
              src="assets/images/personas/pers7.jpg"
              alt=""
            ></img>
            <span className="rightbar-following-name">Jose Luís Iglesias</span>
          </div>

          <div className="rightbar-following">
            <img
              className="rightbar-following-img"
              src="assets/images/personas/pers9.jpg"
              alt=""
            ></img>
            <span className="rightbar-following-name">Luna Martínez</span>
          </div>

          <div className="rightbar-following">
            <img
              className="rightbar-following-img"
              src="assets/images/personas/pers14.jpg"
              alt=""
            ></img>
            <span className="rightbar-following-name">Óscar Milano</span>
          </div>

          <div className="rightbar-following">
            <img
              className="rightbar-following-img"
              src="assets/images/personas/pers16.jpg"
              alt=""
            ></img>
            <span className="rightbar-following-name">Silvio Macarroni</span>
          </div>
        </div>
      </>
    );
  };

  return (
    <div className="rightbar">
      <div className="rightbar-wrapper"></div>
      <ProfileRightbar></ProfileRightbar>
    </div>
  );
}
