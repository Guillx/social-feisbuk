import "./Topbar.css";
import { Search, Person, Chat, Notifications } from "@material-ui/icons";
import { Link } from "react-router-dom";

export default function Topbar() {
  return (
    <div className="topbar-container">
      <div className="topbar-left">
        <Link to="/" className="logo">
          fakebook
        </Link>
      </div>

      <div className="topbar-center">
        <div className="searchbar">
          <Search className="search-icon" />
          <input
            className="search-input"
            placeholder="Busca personas, publicaciones o vídeos..."
          ></input>
        </div>
      </div>

      <div className="topbar-right">
        <div className="topbar-links">
          <Link to="/" className="topbar-link">
            Inicio
          </Link>
          <span className="topbar-link">Calendario</span>
        </div>
        <div className="topbar-icons">
          <div className="topbar-icon-item">
            <Person />
            <span className="topbar-icon-notification">2</span>
          </div>

          <div className="topbar-icon-item">
            <Chat />
            <span className="topbar-icon-notification">7</span>
          </div>

          <div className="topbar-icon-item">
            <Notifications />
            <span className="topbar-icon-notification">1</span>
          </div>
        </div>
        <Link to="/perfil">
          <img
            src="assets/images/personas/pers8.jpg"
            alt=""
            className="topbar-profile-pic"
          ></img>
        </Link>
      </div>
    </div>
  );
}
