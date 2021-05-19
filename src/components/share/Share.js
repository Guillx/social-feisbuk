import "./Share.css";

import { PermMedia, Label, Room, EmojiEmotions } from "@material-ui/icons";

export default function Share() {
  return (
    <div className="share">
      <div className="share-wrapper">
        <div className="share-top">
          <img
            className="share-profile-pic"
            src="assets/images/personas/pers8.jpg"
            alt=""
          ></img>
          <input
            className="share-input"
            placeholder="¿Qué estás pensando?"
          ></input>
        </div>
        <hr className="share-hr"></hr>

        <div className="share-bottom">
          <div className="share-options">
            <div className="share-option">
              <PermMedia className="share-icon" htmlColor="tomato"></PermMedia>
              <span className="share-option-text">Foto o Vídeo</span>
            </div>

            <div className="share-option">
              <Label className="share-icon" htmlColor="blue"></Label>
              <span className="share-option-text">Etiquetas</span>
            </div>

            <div className="share-option">
              <Room className="share-icon" htmlColor="green"></Room>
              <span className="share-option-text">Ubicación</span>
            </div>

            <div className="share-option">
              <EmojiEmotions
                className="share-icon"
                htmlColor="goldenrod"
              ></EmojiEmotions>
              <span className="share-option-text">Estados</span>
            </div>
          </div>
          <button className="share-btn">Publicar</button>
        </div>
      </div>
    </div>
  );
}
