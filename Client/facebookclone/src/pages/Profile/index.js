import React from "react";
import "../../css/style.css";
import img from "../../img/pexels-pixabay-60597.jpg";
import { Link } from "react-router-dom";
import Post from "./post.js";
import ProfileIntro from "./ProfileIntro.js";
import Photos from "./Photos.js";
import Friends from "./friends.js";
import {useSelector} from 'react-redux';


const ProfilePage = () => {
  
  const {firstname, lastname} = useSelector((state) => state.signin.user)
  return (
    <>
      <div className="profile">
        <section className="profile_section">
          <div className="profile__cover">
            <img src={img} alt="Cover" className="profile__cover-1" />
            <div className="profile_row">
              <div className="col-1-of-2">
                <div className="profile__profilepicture">
                  <img
                    src={img}
                    alt="Profile"
                    className="profile__profilepicture-1"
                  />
                  <div className="profile__name">
                    <h1 className="profile__name__heading">{firstname + " " + lastname}</h1>
                    <p className="profile__name__paragraph">1.8k friends</p>
                  </div>
                </div>
              </div>

              <div className="col-1-of-2">
                <div className="btn btn-blue-1 profile__button">
                  <Link
                    to="/messages"
                    className="remove-textdecoration text-white"
                  >
                    <i className="fas fa-envelope u-margin-right"></i>Message
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="profile_information">
          <div className="profile_information_intro">
            <ProfileIntro />
            <Photos />
            <Friends />
          </div>
          <div className="profile_information__posts">
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
          </div>
        </section>
      </div>
    </>
  );
};

export default ProfilePage;
