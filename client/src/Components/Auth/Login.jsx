import React, { useState } from "react";
import Loading from "../Loading";
import { VALID_USER } from "../../GraphQL/users";
import { useQuery } from "@apollo/client";
import wave from "../../img/wave.png";
import bg from "../../img/fondo-login.png";
import avatar from "../../img/user.png";
import "remixicon/fonts/remixicon.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../../styles/Login.css";
import { useDispatch } from "react-redux";
import { setUser } from "../../redux/store"; // Asegúrate de importar la acción setUser desde tu archivo store.js}
import { redirect } from "react-router-dom";

const Login = () => {
  const dispatch = useDispatch();
  const [redirect, setRedirect] = useState(null);

  const [uservalid, setUservalid] = useState({
    username: "",
    password: "",
  });

  const { loading, error, data } = useQuery(VALID_USER, {
    variables: {
      username: uservalid.username,
      password: uservalid.password,
    },
    onCompleted: (data) => {
      // Cuando la consulta se complete, guarda los datos del usuario en el estado global
      if (data && data.user) {
        dispatch(setUser(data.user));
      }
    },
  });

  const handleChange = ({ target: { name, value } }) => {
    setUservalid({
      ...uservalid,
      [name]: value,
    });
  };

  const handleClick = () => {
    if (!data) {
      window.history.pushState({}, "", "/");
    } else {
      window.history.pushState({}, "", "/inicio");
    }
    window.dispatchEvent(new PopStateEvent("popstate"));
  };
  return (
    <div className="container">
      <img src={wave} className="wave" alt="" />
      <div className="img">
        <img src={bg} alt="" />
      </div>
      <div className="login-content">
        <form onSubmit={(e) => e.preventDefault()}>
          <img src={avatar} alt="" />
          <h2 className="title">Bienvenido</h2>
          <div className="input-div one">
            <div className="i">
              <i class="ri-user-fill"></i>
            </div>
            <div className="div">
              <h5>Correo electrónico</h5>
              <input
                type="text"
                className="input"
                name="username"
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="input-div pass">
            <div className="i">
              <i className="ri-lock-fill"></i>
            </div>
            <div className="div">
              <h5>Contraseña</h5>
              <input
                type="password"
                className="input"
                name="password"
                onChange={handleChange}
              />
            </div>
          </div>
          <input
            type="submit"
            className="boton"
            disabled={!data}
            onClick={handleClick}
          />
          <a href="/register">Registrarse aquí</a>
          <ToastContainer />
          <a href="#">¿Olvidaste la contraseña?</a>
        </form>
        {loading && <Loading />}
        {error && <p>Error: {error.message}</p>}
        {data && data.user ? (
          <p>Bienvenido {data.user.fullname}!</p>
        ) : (
          <p>Usuario o contraseña incorrectos</p>
        )}
      </div>
    </div>
  );
};

export default Login;
