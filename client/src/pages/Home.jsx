import React from "react";
import CreatePost from "../Components/CreatePost";
import PostList from "../Components/PostList";
import Profile from "../Components/Profile";
import LogoutButton from "../Components/LogoutButton";

export const Home = () => {
  return (
    <>

      <br />
      <LogoutButton>Deslogearse</LogoutButton>
      <br />
      <CreatePost />
      <PostList />
      <Profile />
    </>
  );
};

export default Home;
