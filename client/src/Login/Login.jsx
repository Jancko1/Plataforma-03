import { useState } from "react";
import { Link } from "react-router-dom";
//-----Remix Icons-----
import "remixicon/fonts/remixicon.css";
//----Styles Login-----
import "../styles/loginStyle.css";
//-----Scripts-----
import "../data/login.js";

const Login = () => {
  const [shoePwd, setshowPwd] = useState(false);
  return (
    <section className="container__login forms">
      <div className="form login">
        <div className="form-content">
          {/* Embacezado del login */}
          <header>Iniciar Sesión</header>
          {/* Petición de Datos */}
          <form action="#">
             {/*---------------EMAIL---------------*/}
            <div className="field input-field">
              <input
                type="email"
                placeholder="Correo Electronico"
                className="input"
                required
              />
            </div>

            {/*---------------CONTRASEÑA---------------*/}
            <div className="field input-field">
              <input
                type={shoePwd ? "text" : "password"}
                placeholder="Contraseña"
                className="password"
                required
              />
              <div onClick={() => setshowPwd(!shoePwd)}>
                {shoePwd ? (
                  <i class="ri-eye-line"></i>
                ) : (
                  <i className="eye-icon ri-eye-off-line ri-eye-line"></i>
                )}
              </div>
            </div>

            <div className="form-link">
              {/* Link Para RECUPERAR contraseña */}
              <a href="#" className="forgot-pass">
                Recuperar contraseña
              </a>
            </div>
            <div className="field button-field">
              <button>Iniciar sesión</button>
            </div>
          </form>
          <div className="form-link">
            <span>
              ¿No tienes cuenta?
              <Link to="/singUp" className="link singnup-link">
                Registrarse
              </Link>
            </span>
          </div>
        </div>
        {/* Crea una linea divisoria */}
        <div className="line"></div>
        {/* Iniciar con otras Opciones, Facebook, Google, Microsoft */}

        {/* FACEBOOK */}
        <div className="media-options">
          <a href="" className="field facebook">
            <i className="ri-facebook-circle-fill"></i>
            <span>Iniciar con Facebook</span>
          </a>
        </div>

        {/* Google */}
        <div className="media-options">
          <a href="" className="field google">
            <i className="ri-google-fill"></i>
            <span>Iniciar con Google</span>
          </a>
        </div>

        {/* Microsft */}
        <div className="media-options">
          <a href="" className="field Microsoft">
            <i className="ri-windows-fill"></i>
            <span>Iniciar con Microsoft</span>
          </a>
        </div>
      </div>
      <script src="login.js"></script>
    </section>
  );
};

export default Login;