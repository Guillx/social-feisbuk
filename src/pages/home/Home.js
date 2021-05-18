import "./Home.css";

import Topbar from "../../components/topbar/Topbar";
import Leftbar from "../../components/leftbar/Leftbar";
import Feed from "../../components/feed/Feed";
import Rightbar from "../../components/rightbar/Rightbar";

export default function Home() {
  return (
    <>
      <Topbar></Topbar>
      <div className="home-container">
        <Leftbar></Leftbar>
        <Feed></Feed>
        <Rightbar></Rightbar>
      </div>
    </>
  );
}
