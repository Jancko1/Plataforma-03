import React from "react";
import CreatePost from "../Components/CreatePost";
import PostList from "../Components/PostList";

import LogoutButton from "../Components/LogoutButton";
import { useAuth0 } from "@auth0/auth0-react";
import Navdes from "../Components/Navdes";
import Login from "../Login/Login";
export const Home = () => {
  const { isAuthenticated } = useAuth0();
  return (
    <>
      {isAuthenticated ? (
        <>
          <a href="/dashboard"></a>
          <br />
          <LogoutButton>Deslogearse</LogoutButton>
          <br />
          <CreatePost />
          <PostList />
        </>
      ) : (
        <><Navdes/><CreatePost /><PostList /></>
      )}
     
    </>
  );
};
export default Home;
