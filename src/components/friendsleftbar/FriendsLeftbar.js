import "./FriendsLeftbar.css";

export default function FriendsLeftbar({ user }) {
  return (
    <li className="leftbar-friend">
      <img className="leftbar-friend-img" src={user.profilePic} alt=""></img>
      <span className="leftbar-friend-name">{user.userName}</span>
    </li>
  );
}
