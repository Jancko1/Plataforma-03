import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { CREATE_POST, GET_POST } from "../GraphQL/posts";
import axios from "axios";

const CreatePost = () => {
  const [cargando, setCargando] = useState(false);
  const [url, setUrl] = useState("");

  const convertBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);

      fileReader.onload = () => {
        resolve(fileReader.result);
      };

      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  };

  function uploadSingleImage(base64) {
    setCargando(true);
    axios
      .post("http://localhost:5000/uploadImage", { image: base64 })
      .then((res) => {
        setUrl(res.data);
        alert("Image uploaded Succesfully");
      })
      .then(() => setCargando(false))
      .catch(console.log);
  }

  function uploadMultipleImages(images) {
    setCargando(true);
    axios
      .post("http://localhost:5000/uploadMultipleImages", { images })
      .then((res) => {
        setUrl(res.data);
        alert("Image uploaded Succesfully");
      })
      .then(() => setCargando(false))
      .catch(console.log);
  }

  const uploadImage = async (event) => {
    const files = event.target.files;
    console.log(files.length);

    if (files.length === 1) {
      const base64 = await convertBase64(files[0]);
      uploadSingleImage(base64);
      return;
    }

    const base64s = [];
    for (var i = 0; i < files.length; i++) {
      var base = await convertBase64(files[i]);
      base64s.push(base);
    }
    uploadMultipleImages(base64s);
  };

  const [post, setPost] = useState({
    titulo: "",
    descripcion: "",
    Imagenes: [url],
  });

  const [createPosts, { loading, error }] = useMutation(CREATE_POST, {
    refetchQueries: [
      {
        query: GET_POST,
      },
      "Get posts",
    ],
  });

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
        descripcion: post.descripcion,
        Imagenes: [url],
      },
    });
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
        value={"Ingrese la descripcion de la publicacion"}
        placeholder="Ingrese la descripcion de la prublicacion"
        onChange={handelChange}
      ></textarea>
      <input type="file" name="Imagenes" onChange={uploadImage} />
      <button
        disabled={!post.descripcion || !post.titulo || loading || cargando}
      >
        Publicar
      </button>
    </form>
  );
};

export default CreatePost;
