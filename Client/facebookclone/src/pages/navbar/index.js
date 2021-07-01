import "../../css/style.css";
import React from "react";
import { Link } from "react-router-dom";
import img from "../../img/pexels-pixabay-60597.jpg";
import {useSelector} from 'react-redux';


const Navbar = () => {
  const {firstname} = useSelector((state) => state.signin.user);
  return (
    <nav className="navbar_1">
 
      <div className="navbar_1_left">
      <ul >
        <li className="navbar_1_icons">
          <i className="fab fa-facebook navbar_1_left_logo"></i>
        </li>
        <li className="navbar_1_icons">
          <input
            type="text"
            className="navbar_1_left_searchbox"
            placeholder="Search"
          />
        </li>
      </ul>
      </div>
      <div className="navbar_1_middle">
      <ul >
        <li className="navbar_1_icon">
          <i className="fas fa-home "></i>
        </li>
        <li className="navbar_1_icon">
          <i className="fas fa-users "></i>
        </li>
      </ul>
      </div>
      <div className="navbar_1_right">
      <ul className="navbar_1_right_right">
        <li>
          <div className="navbar_1_btn">
            <Link to="/profile">
              <div className="navbar_1_gotoprofile">
                <img src={img} alt="Profile" className="navbar_1__profilepicture" />
                <h2 className="navbar_1_btn_name">{firstname}</h2>
              </div>
              
            </Link>
          </div>
        </li>
        <li className="navbar_1_icon">
          <i className="fab fa-facebook-messenger "></i>
        </li>
        <li className="navbar_1_icon">
          <i className="fas fa-bell "></i>
        </li>
        <li className="navbar_1_icon">
          <i className="fas fa-chevron-circle-down"></i>
        </li>
      </ul>
      </div>

      
      
      
    </nav>
  );
};

export default Navbar;
