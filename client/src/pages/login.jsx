import { useState } from "react";
//-----Remix Icons-----
import "remixicon/fonts/remixicon.css";
//----Styles Login-----
import "../styles/loginStyle.css";
//-----Scripts-----
import "../data/login.js";

function Login() {
  const [shoePwd, setshowPwd] = useState(true);
  return (
    <section className="container__login forms">
      <div className="form login">
        <div className="form-content">
          {/* Embacezado del login */}
          <header>Iniciar Sesión</header>
          {/* Petición de Datos */}
          <form action="#">
            <div className="field input-field">
              <input
                type="email"
                placeholder="Correo Electronico"
                className="input"
              />
            </div>

            <div className="field input-field" onClick={() => setshowPwd(!shoePwd)}>
              <input
                type={shoePwd ? "text" : "password"}
                placeholder="Contraseña"
                className="password"
              />
              {shoePwd ? (
                <i class="ri-eye-line"></i>
              ) : (
                <i className="eye-icon ri-eye-off-line ri-eye-line"></i>
              )}
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
              <a href="#" className="link singnup-link">
                Registrarse
              </a>
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
            <span>Inicar con Facebook</span>
          </a>
        </div>

        {/* Google */}
        <div className="media-options">
          <a href="" className="field google">
            <i className="ri-google-fill"></i>
            <span>Inicar con Google</span>
          </a>
        </div>

        {/* Microsft */}
        <div className="media-options">
          <a href="" className="field Microsoft">
            <i className="ri-windows-fill"></i>
            <span>Inicar con Microsoft</span>
          </a>
        </div>
      </div>

      {/* ---------------Sección de registro---------------*/}

      <div className="form signup">
        <div className="form-content">
          {/* Embacezado del login */}
          <header>Registrarse</header>
          {/* Petición de Datos */}
          <form action="#">
            <div className="field input-field">
              <input
                type="email"
                placeholder="Correo Electronico"
                className="input"
              />
            </div>

            <div className="field input-field">
              <input
                type="password"
                placeholder="Contraseña"
                className="password"
              />
            </div>
            {/* Confirmar Contraseña */}
            <div className="field input-field">
              <input
                type="password"
                placeholder="Contraseña"
                className="password"
              />
              <i className="eye-icon ri-eye-off-line ri-eye-line"></i>
            </div>
            {/* BUTTON para registrarse */}
            <div className="field button-field">
              <button>Registrarse</button>
            </div>
          </form>
          <div className="form-link">
            <span>
              ¿Ya tienes una cuenta?{" "}
              <a href="#" className="link login-link">
                Iniciar Sesión
              </a>
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
            <span>Inicar con Facebook</span>
          </a>
        </div>

        {/* Google */}
        <div className="media-options">
          <a href="" className="field google">
            <i className="ri-google-fill"></i>
            <span>Inicar con Google</span>
          </a>
        </div>

        {/* Microsft */}
        <div className="media-options">
          <a href="" className="field Microsoft">
            <i className="ri-windows-fill"></i>
            <span>Inicar con Microsoft</span>
          </a>
        </div>
      </div>
      <script src="login.js"></script>
    </section>
  );
}

export default Login;
