import "../../css/style.css";
import React from "react";
import Post from "../Profile/post.js";
import Navbar from "../navbar/index.js";
import Contact from '../../Components/contact/index';






const HomePage = () => {
  
  
 
  return (
    <>
    <Navbar />
    <section className="home">
    <div className="home_1">
    <div className="home_left">
        <Contact />
        <Contact />
        <Contact />
        <Contact />
        <Contact />
        <Contact />
        <Contact />
        <Contact />
        <Contact />
        <Contact />
        <Contact />
        <Contact />
        <Contact />
        <Contact />
        <Contact />
        <Contact />
        <Contact />
        <Contact />
        <Contact />
        <Contact />
        <Contact />
        <Contact />

      </div>
    </div>
      
      <div className="home_2">
      <div className="home_middle ">
        <Post className="home_middle_post"/>
        <Post />
        <Post />
        <Post />
        <Post />
      </div>
      </div>
      
      <div className="home_3">
      <div className="home_right">
        <h1>Contacts</h1>
        <Contact />
        <Contact />
        <Contact />
        <Contact />
        <Contact />

        <Contact />
        <Contact />
        <Contact />
        <Contact />
        <Contact />
        <Contact />
        <Contact />
        <Contact />
        <Contact />
        <Contact />
        <Contact />
        <Contact />


      </div>
      </div>
      
    </section>
   
    </>
  )
};

export default HomePage;
