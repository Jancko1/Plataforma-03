import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import Loadding from "./Loading";


import { AiFillFacebook } from "react-icons/ai";


import '../styles/Profile.css';

const Profile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <Loadding />;
  }

  return (
    isAuthenticated && (
      <div>
        <section className="seccion-perfil-usuario">
          <div className="perfil-usuario-header">
            <div className="perfil-usuario-portada">
              <div className="perfil-usuario-avatar">
                  <img src={user.picture} alt={user.name} />
              </div>
              <button type="button" className="boton-portada">
                <i className="far fa-image"></i> Cambiar fondo
              </button>
            </div>
          </div>
          <div className="perfil-usuario-body">
            <div className="perfil-usuario-bio">
              <h3 className="titulo">{user.name}</h3>
              <p className="texto">
                {user.email}
              </p>
            </div>
            <div className="perfil-usuario-footer">
              <ul className="lista-datos">
                <li>
                  <i className="icono fas fa-map-signs"></i> Direccion de usuario:
                </li>
                <li>
                  <i className="icono fas fa-phone-alt"></i> Telefono:{user.phone_number}
                </li>
                <li>
                  <i className="icono fas fa-briefcase"></i> Trabaja en.
                </li>
                <li>
                  <i className="icono fas fa-building"></i> Cargo 
                </li>
              </ul>
              <ul className="lista-datos">
                <li>
                  <i className="icono fas fa-map-marker-alt"></i> Ubicacion.{user.address}
                </li>
                <li>
                  <i className="icono fas fa-calendar-alt"></i> Fecha nacimiento.
                </li>
                <li>
                  <i className="icono fas fa-user-check"></i> Registro.
                </li>
                <li>
                  <i className="icono fas fa-share-alt"></i> Redes sociales.
                </li>
              </ul>
            </div>
            <div className="redes-sociales">
              <a href="" className="boton-redes facebook fab fa-facebook-f">
                
              </a>
              <a href="" className="boton-redes twitter fab fa-twitter">
                <i className="icon-twitter"></i>
              </a>
              <a href="" className="boton-redes instagram fab fa-instagram">
                <i className="icon-instagram"></i>
              </a>
            </div>
          </div>
        </section>
      </div>
    )
  );
};

export default Profile;
