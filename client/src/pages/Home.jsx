import React from "react";
import CreatePost from "../Components/CreatePost";
import PostList from "../Components/PostList";
//Parallax.js
import { useState, useEffect } from "react";
import "../styles/home.css";
import Login from "../Login/Login";
import Profile from "../Components/Profile";
import LogoutButton from "../Components/LogoutButton"




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
  return (
    <>
      <section
        style={{
          backgroundSize: `${(window.outerHeight - scrollPosition) / 3}%`,
        }}
        className="banner"
      >
        <h2>Parallax</h2>
      <Login>Login</Login>
      <br />
      <LogoutButton>Deslogearse</LogoutButton>
      <br />
      <PostList />
      <CreatePost />
        <Profile/>
      </section>
    </>
  );
};

export default Home;
