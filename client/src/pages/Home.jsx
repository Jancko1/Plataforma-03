import React from "react";
import CreatePost from "../Components/CreatePost";
import PostList from "../Components/PostList";
import { useSelector } from 'react-redux';
export const Home = () => {
  const user = useSelector((state) => state.user);
  return (
    <>
      <>
      <h1>Bienvenido, {user.fullname}</h1>
        {/* <PostList /> */}
      </>
    </>
  );
};
export default Home;
