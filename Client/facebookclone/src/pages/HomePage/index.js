import "../../css/style.css";
import React from "react";
import Post from "../Profile/post.js";
import Navbar from "../navbar/index.js";



const HomePage = () => {
  return (
    <>
    <Navbar />
    <div  className="profile_information__posts-1">
       <Post />
       <Post />
       <Post />
       <Post />
       <Post />
    </div>
    </>
  )
};

export default HomePage;
