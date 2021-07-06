import "../../css/style.css";
import React, {useEffect} from "react";
import Navbar from "../navbar/index.js";
import Contact from '../../Components/contact/index';
import CreatePost from '../../Components/create_post/createPost';
import Posts from '../Post/posts.js';

import {useSelector} from 'react-redux';
import {fetchPosts} from '../../redux/reducers/Post.js';
import {useDispatch} from 'react-redux';




const HomePage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchPosts());
    
  }, [])
  const {createPost} = useSelector((state) =>state.postCRD);
  console.log(createPost);
  const myStyle = () =>{
    if(createPost){
      return {
        backgroundColor:"grey"
        
      };
    }
  }
  return (
    <>
    <Navbar />
    <section 
    className="home" 
    style={myStyle()}>
    <div className="home_1">
    <div className="home_left">
        <Contact />
        <Contact />
        <Contact />
        <Contact />
     

      </div>
    </div>
      
      <div className="home_2">
      <div className="home_middle ">
        <CreatePost />
        <Posts />
        
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

        


      </div>
      </div>
      
    </section>
   
    </>
  )
};

export default HomePage;
