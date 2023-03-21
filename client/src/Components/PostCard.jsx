import React from "react";
//REMIX ICONS
import "remixicon/fonts/remixicon.css";
//Bootstrap
import "react-bootstrap";
//STYLES CSS
import "../styles/postCard.css";
const PostCard = ({ post }) => {
  return (
    <div key={post._id} className="container mt-5 ">
      <div className="row justify-content-center col-12">
        <div className="col-md-8">
          <div className="card mb-3">
            <div className="card-body pb-3">
              <div className="d-flex align-items-center mb-3 text-center">
                {/* Imagen de la persona usuaria */}
                <img
                  src=""
                  alt="Persona"
                  className="rounded-circle me-3"
                  width="50"
                />
                <div>
                  <h5 className="card-title">Nombre de usuario</h5>
                  <p className="card-text">{post.descripcion}</p>
                </div>
              </div>
              <div className="d-flex justify-content-center">
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
