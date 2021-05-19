import "./Profile.css";
import Topbar from "../../components/topbar/Topbar";
import Leftbar from "../../components/leftbar/Leftbar";
import FeedProfile from "../../components/feedprofile/FeedProfile";
import Rightbar from "../../components/rightbar/Rightbar";

export default function Profile() {
  return (
    <>
      <Topbar></Topbar>
      <div className="profile">
        <Leftbar></Leftbar>
        <div className="profile-right">
          <div className="profile-right-top">
            <div className="profile-cover">
              <img
                className="profile-cover-img"
                src="assets/images/posts/post8.jpg"
                alt=""
              ></img>
              <img
                className="profile-user-img"
                src="assets/images/personas/pers8.jpg"
                alt=""
              ></img>
            </div>
            <div className="profile-info">
              <h4 className="profile-info-name">Guille Gil</h4>
              <span className="profile-info-desc">Hola a todxs!</span>
            </div>
          </div>
          <div className="profile-right-bottom">
            <FeedProfile></FeedProfile>
            <Rightbar profile></Rightbar>
          </div>
        </div>
      </div>
    </>
  );
}
