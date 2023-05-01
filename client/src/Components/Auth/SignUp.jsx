import React from "react";
import { useState } from "react";
//Imagenes
import wave from "../../img/wave.png";
import bg from "../../img/bg.png";
import avatar from "../../img/user.png";
//Remix icon
import "remixicon/fonts/remixicon.css";
//ESTILOS CSS
import "../../styles/Login.css";

const SignUp = () => {

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
      <div className="login-content">
        <form action="">
          <img src={avatar} alt="" />
          <h2 className="title">Registro</h2>
          {/* ------------CORREO ELECTRONICO------------ */}
          <div className="input-div one">
            <div className="i">
              <i class="ri-mail-line"></i>
            </div>
            <div className="div">
              <h5>Correo electrónico</h5>
              <input type="text" className="input" />
            </div>
          </div>
          {/* ------------USUARIO------------ */}
          <div className="input-div one">
            <div className="i">
              <i class="ri-user-fill"></i>
            </div>
            <div className="div">
              <h5>Usuario</h5>
              <input type="text" className="input" />
            </div>
          </div>
          {/* ------------CONTRASEÑA------------ */}
          <div className="input-div pass">
            <div className="i">
              <i className="ri-lock-fill"></i>
            </div>
            <div className="div">
              <h5>Contraseña</h5>
              <input type="password" className="input" />
            </div>
          </div>
          {/* ------------REPETIR CONTRASEÑA------------ */}
          <div className="input-div pass">
            <div className="i">
              <i className="ri-lock-fill"></i>
            </div>
            <div className="div">
              <h5>Contraseña</h5>
              <input type="password" className="input" />
            </div>
          </div>
          <input type="submit" className="boton" value="Iniciar sesión" />
          <a href="#">Iniciar sesión</a>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
