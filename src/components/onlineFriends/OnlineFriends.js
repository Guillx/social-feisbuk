import "./OnlineFriends.css";

export default function OnlineFriends({ user }) {
  return (
    <li className="rightbar-friend">
      <div className="rightbar-profile-img-container">
        <img
          className="rightbar-profile-pic"
          src={user.profilePic}
          alt=""
        ></img>
        <span className="rightbar-online"></span>
      </div>
      <span className="rightbar-username">{user.userName}</span>
    </li>
  );
}
