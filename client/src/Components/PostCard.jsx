import React from "react";
//REMIX ICONS
import "remixicon/fonts/remixicon.css";



import { useAuth0 } from "@auth0/auth0-react";
//Bootstrap
import "react-bootstrap";
//STYLES CSS
import "../styles/postCard.css";

const PostCard = ({ post }) => {
  const { user, isAuthenticated, isLoading } = useAuth0();
  return (
    <div key={post._id} className="container mt-5  ">
      <div className="row justify-content-center ">
        <div className="col-md-8">
          <div className="card mb-3">
            <div className="card-body pb-3">
              <div className="d-flex align-items-center user_content">
                {/* Imagen de la persona usuaria */}
                <img                 
                 src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Vombatus_ursinus_-Maria_Island_National_Park.jpg/1200px-Vombatus_ursinus_-Maria_Island_National_Park.jpg"
                  alt="Persona"
                  className="rounded-circle me-3"
                  width="60"
                  height="60"
                />
                <div className="text-content">
                  <h5 className="card-title mt-5">Nombre de usuario</h5>
                  <h1 className="card-title">{post.titulo}</h1>
                  <p className="card-text">{post.descripcion}</p>
                </div>
              </div>
              <div className="d-flex justify-content-center mt-2">
                <img src={post.Imagenes} alt="" className="img-fluid mb-3 " />
              </div>
              <hr />
              <div className="d-flex justify-content-between align-items-center">
                <div className="d-flex icons">
                  <a href="#" className="me-3">
                    <i className="ri-thumb-up-line"></i>
                  </a>
                  <a href="#">
                    <i className="ri-share-fill"></i>
                  </a>
                </div>
                <small className="text-muted">Publicado hace 2 horas</small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
