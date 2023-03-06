import React from "react";
import CreatePost from "../Components/CreatePost";
import PostList from "../Components/PostList";

const Home = () => {
  return (
    <div>
      <a href="/login">Iniciar session</a>
      <PostList />
      <CreatePost/>
    </div>
  );
};

export default Home;
