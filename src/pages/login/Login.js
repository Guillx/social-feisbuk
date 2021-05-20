import { Link } from "react-router-dom";
import "./Login.css";

export default function Login() {
  return (
    <div className="login">
      <div className="login-wrapper">
        <div className="login-left">
          <h3 className="login-logo">Fakebook</h3>
          <span className="login-text">
            Conecta con el mundo a través de Fakebook.
          </span>
        </div>
        <div className="login-right">
          <div className="login-box">
            <input className="login-input" placeholder="Email"></input>
            <input className="login-input" placeholder="Contraseña"></input>
            <button className="login-btn">Iniciar Sesión</button>
            <span className="login-forgot">¿Has olvidado la contraseña?</span>
            <Link to="/registro" className="login-register-btn">
              Crear una cuenta
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
