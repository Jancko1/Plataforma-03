import React from "react";
//REMIX ICONS
import 'remixicon/fonts/remixicon.css'
//STYLES CSS
import "../styles/postCard.css";
const PostCard = ({ post }) => {
  return (
    <div key={post._id} className="container">
      <h2>Post</h2>
      <div className="blog-post">
        <div className="blog-post_img">
          <img src={post.Imagenes} alt="Imagen publicada" />
        </div>
        <div className="blog-post_info">
          <div className="blog-post_date">
            <span>Nombre persona</span>
            <span>Marzo 21 2023</span>
          </div>
          <h2>{post.titutlo}</h2>
          <p>{post.descripcion}</p>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
