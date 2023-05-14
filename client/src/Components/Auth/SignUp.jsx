import React from "react";
//Backend
import { useState } from "react";
import { useMutation } from "@apollo/client";
import { CREATE_USER } from "../../GraphQL/users";
//Imagenes
import wave from "../../img/wave.png";
import bg from "../../img/bg.png";
import avatar from "../../img/user.png";
//Remix icon
import "remixicon/fonts/remixicon.css";
//ESTILOS CSS
import "../../styles/Login.css";

const SignUp = () => {
  //Envio de datos al backend de la plataforma
  const [user, setUser] = useState({
    fullname: "",
    username: "",
    password: "",
    rol: "user",
    telefono: "",
    direccion: "",
  });
  const [createUser, { loading, error, data }] = useMutation(CREATE_USER);

  const handleChange = ({ target: { name, value } }) => {
    setUser({
      ...user,
      [name]: value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    createUser({
      variables: {
        fullname: user.fullname,
        username: user.username,
        password: user.password,
        rol: user.rol,
        direccion: user.direccion,
        telefono: user.telefono,
      },
    });
    console.log(user);
  };

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

  return (
    <div className="container">
      <img src={wave} className="wave" alt="" />
      <div className="img">
        <img src={bg} alt="" />
      </div>
      {error && <p>{error.message}</p>}
      <div className="login-content">
        <form onSubmit={handleSubmit}>
          <img src={avatar} alt="Avatar" />
          <h2 className="title">Registro</h2>
          {/* ------------CORREO ELECTRONICO------------ */}
          <div className="input-div one">
            <div className="i">
              <i class="ri-mail-line"></i>
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
          {/* ------------USUARIO------------ */}
          <div className="input-div one">
            <div className="i">
              <i class="ri-user-fill"></i>
            </div>
            <div className="div">
              <h5>Nombre completo</h5>
              <input
                type="text"
                className="input"
                name="fullname"
                onChange={handleChange}
              />
            </div>
          </div>
          {/* ------------------Telefono -------------------- */}
          <div className="input-div pass">
            <div className="i">
              <i class="ri-phone-fill"></i>
            </div>
            <div className="div">
              <h5>Telefono</h5>
              <input
                type="text"
                className="input"
                name="telefono"
                onChange={handleChange}
              />
            </div>
          </div>
          {/* ------------------Direccion -------------------- */}
          <div className="input-div pass">
            <div className="i">
              <i class="ri-map-pin-fill"></i>
            </div>
            <div className="div">
              <h5>Ubicacion</h5>
              <input
                type="text"
                className="input"
                name="direccion"
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
            value="Registrarse"
            disabled={
              !user.username ||
              !user.fullname ||
              !user.password ||
              !user.telefono ||
              !user.direccion ||
              loading
            }
          />
          <a href="/inicio">Iniciar sesión</a>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
