import React from "react";
import CreatePost from "../Components/CreatePost";
import PostList from "../Components/PostList";

import Navdes from "../Components/Navdes";
export const Home = ({ user }) => {
  console.log(user)
  return (
    <>
    <h1></h1>
        <><Navdes/><CreatePost /><PostList /></>
     
    </>
  );
};
export default Home;
