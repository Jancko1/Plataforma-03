import React, { useState } from "react";
import Loading from "../Loading";
import {Navigate} from "react-router-dom"
//validación de usuario
import { VALID_USER } from "../../GraphQL/users";
import { useQuery } from "@apollo/client";
//Imagenes
import wave from "../../img/wave.png";
import bg from "../../img/fondo-login.png";
import avatar from "../../img/user.png";
//Remix icon
import "remixicon/fonts/remixicon.css";
//Tostify icon
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
//ESTILOS CSS
import "../../styles/Login.css";


const Login = () => {
  
  //Consultas ala base de datos
  const [uservalid, setUservalid] = useState({
    username: "",
    password: "",
  });
  const { loading, error, data } = useQuery(VALID_USER, {
    variables: {
      username: uservalid.username,
      password: uservalid.password,
    },
  });
  

  //Animacion al clickear un input
  const inputs = document.querySelectorAll(".input");
  function addcl() {
    let parent = this.parentNode.parentNode;
    parent.classList.add("focus");
  }
  function remcl() {
    let parent = this.parentNode.parentNode;
    if (this.value == "") {
      parent.classList.remove("focus");
    }
  }

  inputs.forEach((input) => {
    input.addEventListener("focus", addcl);
    input.addEventListener("blur", remcl);
  });
  const handleChange = ({ target: { name, value } }) => {
    setUservalid({
      ...uservalid,
      [name]: value,
    });
  };
  const [red, setRed] = useState(true);
  const handleClick = () => {
    // Cambia la URL actual a la nueva página que deseas cargar
    if (!data) {
      window.location.href = "/"
    } else {
      window.location.href = `/inicio`

    }
  }
  return (
    <div className="container">
      <img src={wave} className="wave" alt="" />
      <div className="img">
        <img src={bg} alt="" />
      </div>
      <div className="login-content">
        <form onSubmit={e => e.preventDefault()}>
          <img src={avatar} alt="" />
          <h2 className="title">Bienvenido</h2>
          <div className="input-div one">
            {/* ------------USUARIO------------ */}
            <div className="i">
              <i class="ri-user-fill"></i>
            </div>
            <div className="div">
              <h5>Correo electrónico</h5>
              <input
                type="text"a
                className="input"
                name="username"
                onChange={handleChange}
              />
            </div>
          </div>
          {/* ------------CONTRASEÑA------------ */}
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
          {/* AQUÍ DEBE REDIRECCIONAR AL REGISTRO */}
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
