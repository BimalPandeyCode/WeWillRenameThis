import React from 'react';
import "../../css/style.css";
import img from '../../img/pexels-pixabay-60597.jpg';
import { Link } from 'react-router-dom';
import Post from "./post.js";
import ProfileIntro from "./ProfileIntro.js";
import Photos from "./Photos.js";
import Friends from "./friends.js";

const ProfilePage = () => {
    return (
        <>
        <section className="profile_section">
        <div className="profile">
        <div className="profile__cover">
            <img src={img} alt="Cover photo" className="profile__cover" />
        </div>
        <div className="profile__profilepicture">
            <img src={img} alt="Profile photo" className="profile__profilepicture-1"/>
        </div>
        <div className="profile__name">
            <h1 className="profile__name__heading">Pasang Sherpa</h1>
            <p className="profile__name__paragraph">1.8k friends</p>
        </div>
        <div className="btn btn-blue-1 profile__button">
            <Link to="/messages" className="remove-textdecoration text-white"><i className="fas fa-envelope u-margin-right"></i>Message</Link>
        </div>
        
        
        
    
    </div>
    <section className="profile_information">
            <ProfileIntro />
            <ProfileIntro />
            <Photos />
            <Friends />
        </section>
        
        
    <section className="profile__posts">
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
    </section> 
        </section>

         
   
    </>
   
    )
}

export default ProfilePage;
