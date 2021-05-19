import "./Leftbar.css";
import { Users } from "../../TestData";
import FriendsLeftbar from "../friendsleftbar/FriendsLeftbar";

/* ICONS */
import {
  RssFeed,
  Chat,
  PlayCircleFilled,
  Group,
  Bookmark,
  Help,
  Work,
  Event,
  School,
} from "@material-ui/icons";

export default function Leftbar() {
  return (
    <div className="leftbar">
      <div className="leftbar-wrapper">
        <ul className="leftbar-list">
          <li className="leftbar-list-item">
            <RssFeed className="leftbar-icon"></RssFeed>
            <span className="leftbar-list-item-text">Feed</span>
          </li>

          <li className="leftbar-list-item">
            <Chat className="leftbar-icon"></Chat>
            <span className="leftbar-list-item-text">Chats</span>
          </li>

          <li className="leftbar-list-item">
            <PlayCircleFilled className="leftbar-icon"></PlayCircleFilled>
            <span className="leftbar-list-item-text">Vídeos</span>
          </li>

          <li className="leftbar-list-item">
            <Group className="leftbar-icon"></Group>
            <span className="leftbar-list-item-text">Grupos</span>
          </li>

          <li className="leftbar-list-item">
            <Bookmark className="leftbar-icon"></Bookmark>
            <span className="leftbar-list-item-text">Marcadores</span>
          </li>

          <li className="leftbar-list-item">
            <Help className="leftbar-icon"></Help>
            <span className="leftbar-list-item-text">Preguntas</span>
          </li>

          <li className="leftbar-list-item">
            <Work className="leftbar-icon"></Work>
            <span className="leftbar-list-item-text">Empleo</span>
          </li>

          <li className="leftbar-list-item">
            <Event className="leftbar-icon"></Event>
            <span className="leftbar-list-item-text">Eventos</span>
          </li>

          <li className="leftbar-list-item">
            <School className="leftbar-icon"></School>
            <span className="leftbar-list-item-text">Cursos</span>
          </li>
        </ul>

        <button className="leftbar-btn">Ver Más</button>
        <hr className="leftbar-hr"></hr>
        <ul className="leftbar-friendlist">
          {Users.map((u) => (
            <FriendsLeftbar key={u.id} user={u}></FriendsLeftbar>
          ))}
        </ul>
      </div>
    </div>
  );
}
