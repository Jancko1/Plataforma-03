import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { CREATE_POST, GET_POST } from "../GraphQL/posts";


const CreatePost = () => {
  const [post, setPost] = useState({
    titulo: "",
    descripcion: "",
  });

  const [createPosts, {loading, error}] = useMutation(CREATE_POST, {
    refetchQueries: [
      {
        query: GET_POST
      },
      'Get posts'
    ]
  })

  const handelChange = ({ target: { name, value } }) => {
    setPost({
      ...post,
      [name]: value,
    });
  };
  const handelSubmitted = (e) => {
    e.preventDefault();
    createPosts({
      variables: {
        titulo: post.titulo,
        descripcion: post.descripcion
      }
    })
    console.log(post);
  };
  return (
    <form onSubmit={handelSubmitted}>
      {error && <p>{error.message}</p>}
      <input
        type="text"
        name="titulo"
        placeholder="Ingrese el titulo de la publicacion"
        onChange={handelChange}
      />
      <textarea
        name="descripcion"
        rows="3"
        placeholder="Ingrese la descripcion de la prublicacion"
        onChange={handelChange}
      ></textarea>
      <button
      disabled={!post.descripcion || !post.titulo || loading}
      >Publicar</button>
    </form>
  );
};

export default CreatePost;
