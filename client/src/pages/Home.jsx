import React from "react";
import CreatePost from "../Components/CreatePost";
import PostList from "../Components/PostList";
//Parallax.js
import { useState, useEffect } from "react";
import "../styles/home.css";
import Login from "../Login/Login";

import LogoutButton from "../Components/LogoutButton"
import { useAuth0 } from "@auth0/auth0-react";



const useParallaxBanner = (setScrollPosition) => {
  const handleScroll = () => setScrollPosition(window.pageXOffset);
  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
};
export const Home = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  useParallaxBanner(setScrollPosition);
  const {isAuthenticated} = useAuth0();
  return (
    <>
      <section
        style={{
          backgroundSize: `${(window.outerHeight - scrollPosition) / 3}%`,
        }}
        className="banner"
      >
        <h2>Parallax</h2>
      {isAuthenticated ?(<>
        <a href="/dashboard"></a>
      <br />
      <LogoutButton>Deslogearse</LogoutButton>
      <br />
      <PostList />
      <CreatePost />
      </>):(
        <Login>Login</Login>)}
     
      </section>
    </>
  );
};

export default Home;
