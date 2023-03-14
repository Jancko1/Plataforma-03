import { useState } from "react";
import { Link } from "react-router-dom";
const SingUp = () => {
  const [shoePwd, setshowPwd] = useState(false);
  return (
    <section className="container__login forms">
      <div className="form login">
        <div className="form-content">
          {/* Embacezado del login */}
          <header>Registrarse</header>
          {/* Petición de Datos */}
          <form action="#">
            <div className="field input-field">
              <input
                required
                type="email"
                placeholder="Correo Electronico"
                className="input"
              />
            </div>
            {/*---------------CONTRASEÑA---------------*/}
            <div className="field input-field">
              <input
                required
                type={shoePwd ? "text" : "password"}
                placeholder="Contraseña"
                className="password"
              />
            </div>
            {/* ---------------Confirmar Contraseña--------------- */}
            <div className="field input-field">
              <input
                type={shoePwd ? "text" : "password"}
                placeholder="Confirmar contraseña"
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
            {/* BUTTON para registrarse */}
            <div className="field button-field">
              <button>Registrarse</button>
            </div>
          </form>
          <div className="form-link">
            <span>
              ¿Ya tienes una cuenta?{" "}
              <a href="/singIn" className="link login-link">
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

export default SingUp;
