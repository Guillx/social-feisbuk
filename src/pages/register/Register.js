import { Link } from "react-router-dom";
import "./Register.css";

export default function Register() {
  return (
    <div className="register">
      <div className="register-wrapper">
        <div className="register-left">
          <h3 className="register-logo">Fakebook</h3>
          <span className="register-text">
            Conecta con el mundo a través de Fakebook.
          </span>
        </div>
        <div className="register-right">
          <div className="register-box">
            <input className="register-input" placeholder="Nombre"></input>
            <input className="register-input" placeholder="Email"></input>
            <input className="register-input" placeholder="Contraseña"></input>
            <input
              className="register-input"
              placeholder="Repetir contraseña"
            ></input>
            <button className="register-btn">Crear una cuenta</button>

            <Link to="/login" className="register-register-btn">
              Iniciar Sesión
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
