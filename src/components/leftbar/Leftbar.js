import "./Leftbar.css";

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

/* FOTOS */
import person1 from "../../assets/images/personas/pers1.jpg";
import person2 from "../../assets/images/personas/pers2.jpg";
import person3 from "../../assets/images/personas/pers3.jpg";
import person4 from "../../assets/images/personas/pers4.jpg";
import person5 from "../../assets/images/personas/pers5.jpg";
import person6 from "../../assets/images/personas/pers6.jpg";
import person7 from "../../assets/images/personas/pers7.jpg";
import person9 from "../../assets/images/personas/pers9.jpg";
import person10 from "../../assets/images/personas/pers10.jpg";
import person11 from "../../assets/images/personas/pers11.jpg";
import person12 from "../../assets/images/personas/pers12.jpg";
import person13 from "../../assets/images/personas/pers13.jpg";
import person14 from "../../assets/images/personas/pers14.jpg";
import person15 from "../../assets/images/personas/pers15.jpg";
import person16 from "../../assets/images/personas/pers16.jpg";
import person17 from "../../assets/images/personas/pers17.jpg";
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
          <li className="leftbar-friend">
            <img className="leftbar-friend-img" src={person1} alt=""></img>
            <span className="leftbar-friend-name">Rebeca García</span>
          </li>

          <li className="leftbar-friend">
            <img className="leftbar-friend-img" src={person2} alt=""></img>
            <span className="leftbar-friend-name">Sandra Reyes</span>
          </li>

          <li className="leftbar-friend">
            <img className="leftbar-friend-img" src={person6} alt=""></img>
            <span className="leftbar-friend-name">Miguel Sánchez</span>
          </li>

          <li className="leftbar-friend">
            <img className="leftbar-friend-img" src={person4} alt=""></img>
            <span className="leftbar-friend-name">Silvia Pazos</span>
          </li>

          <li className="leftbar-friend">
            <img className="leftbar-friend-img" src={person5} alt=""></img>
            <span className="leftbar-friend-name">Romina Andrade</span>
          </li>

          <li className="leftbar-friend">
            <img className="leftbar-friend-img" src={person3} alt=""></img>
            <span className="leftbar-friend-name">Ana Cruz</span>
          </li>

          <li className="leftbar-friend">
            <img className="leftbar-friend-img" src={person7} alt=""></img>
            <span className="leftbar-friend-name">Jose Luís Iglesias</span>
          </li>

          <li className="leftbar-friend">
            <img className="leftbar-friend-img" src={person9} alt=""></img>
            <span className="leftbar-friend-name">Luna Martínez</span>
          </li>

          <li className="leftbar-friend">
            <img className="leftbar-friend-img" src={person10} alt=""></img>
            <span className="leftbar-friend-name">Gorka Urribari</span>
          </li>

          <li className="leftbar-friend">
            <img className="leftbar-friend-img" src={person11} alt=""></img>
            <span className="leftbar-friend-name">Lucía Pérez</span>
          </li>

          <li className="leftbar-friend">
            <img className="leftbar-friend-img" src={person12} alt=""></img>
            <span className="leftbar-friend-name">Sara Casas</span>
          </li>

          <li className="leftbar-friend">
            <img className="leftbar-friend-img" src={person13} alt=""></img>
            <span className="leftbar-friend-name">Martín Sanz</span>
          </li>

          <li className="leftbar-friend">
            <img className="leftbar-friend-img" src={person14} alt=""></img>
            <span className="leftbar-friend-name">Óscar Milano</span>
          </li>

          <li className="leftbar-friend">
            <img className="leftbar-friend-img" src={person15} alt=""></img>
            <span className="leftbar-friend-name">Carlota Santos</span>
          </li>

          <li className="leftbar-friend">
            <img className="leftbar-friend-img" src={person16} alt=""></img>
            <span className="leftbar-friend-name">Silvio Macarroni</span>
          </li>

          <li className="leftbar-friend">
            <img className="leftbar-friend-img" src={person17} alt=""></img>
            <span className="leftbar-friend-name">Luca Merkel</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
