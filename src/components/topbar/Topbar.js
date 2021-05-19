import "./Topbar.css";
import { Search, Person, Chat, Notifications } from "@material-ui/icons";

export default function Topbar() {
  return (
    <div className="topbar-container">
      <div className="topbar-left">
        <span className="logo">fakebook</span>
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
          <span className="topbar-link">Inicio</span>
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
        <img
          src="assets/images/personas/pers8.jpg"
          alt=""
          className="topbar-profile-pic"
        ></img>
      </div>
    </div>
  );
}
