import "../../css/style.css";
import React from "react";
import Post from "../Profile/post.js";
import Navbar from "../navbar/index.js";




const HomePage = () => {
 
  return (
    <>
    <Navbar />
    <div className="row">
      <div className="col-1-of-3">
        helo
      </div>
      <div className="col-1-of-3 profile_information__posts">
      <Post />
       <Post />
       <Post />
       <Post />
       <Post />
      </div>
      <div className="col-1-of-3">
        contacts
      </div>
    </div>
   
    </>
  )
};

export default HomePage;
