import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { CREATE_POST, GET_POST } from "../GraphQL/posts";
import axios from "axios";

const CreatePost = () => {
  const [post, setPost] = useState({
    titulo: "",
    descripcion: "",
    imagenes: "",
  });

  const [createPosts] = useMutation(CREATE_POST, {
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
        imagenes: url,
      },
    });
  };

  const [loading, setLoading] = useState(false);
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
    setLoading(true);
    axios
      .post("https://imagenescircuito.onrender.com/uploadImage", { image: base64 })
      .then((res) => {
        setUrl(res.data);
        alert("Image uploaded Succesfully");
      })
      .then(() => setLoading(false))
      .catch(console.log);
  }

  function uploadMultipleImages(images) {
    setLoading(true);
    axios
      .post("https://imagenescircuito.onrender.com/uploadMultipleImages", { images })
      .then((res) => {
        setUrl(res.data);
        alert("Image uploaded Succesfully");
      })
      .then(() => setLoading(false))
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

  function UploadInput() {
    return (
      <div>
        <label>
          <input
            onChange={uploadImage}
            id="dropzone-file"
            type="file"
            multiple
          />
        </label>
      </div>
    );
  }
  return (
    <div>
      <br />
      <div>{loading ? <div></div> : <UploadInput />}</div>
      <form onSubmit={handelSubmitted}>
        <input type="text" name="titulo" id="" onChange={handelChange} />
        <textarea
          name="descripcion"
          id=""
          rows="3"
          onChange={handelChange}
        ></textarea>
        <button>enviar</button>
      </form>
    </div>
  );
};

export default CreatePost;
