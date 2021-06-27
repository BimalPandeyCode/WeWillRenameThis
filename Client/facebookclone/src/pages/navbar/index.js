import "../../css/style.css";
import React from "react";
import { Link } from "react-router-dom";
import img from "../../img/pexels-pixabay-60597.jpg";

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="navbar_left">
        <li className="navbar_icons">
          <i class="fab fa-facebook navbar_left_logo"></i>
        </li>
        <li className="navbar_icons">
          <input
            type="text"
            className="navbar_left_searchbox"
            placeholder="Search"
          />
        </li>
      </ul>
      <ul className="navbar_middle">
        <li className="navbar_icons">
          <i class="fas fa-home navbar_icon"></i>
        </li>
        <li className="navbar_icons">
          <i class="fas fa-users navbar_icon "></i>
        </li>
      </ul>
      <ul className="navbar_right">
        <li className="navbar_icons">
          <div className="navbar_btn">
            <Link to="/profile">
              <img src={img} alt="Profile" className="navbar__profilepicture" />
              <h2 class="navbar_btn_name">pasang</h2>
            </Link>
          </div>
        </li>
        <li className="navbar_icons">
          <i class="fab fa-facebook-messenger navbar_icon"></i>
        </li>
        <li className="navbar_icons">
          <i class="fas fa-bell navbar_icon"></i>
        </li>
        <li className="navbar_icons">
          <i class="fas fa-chevron-circle-down navbar_icon"></i>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
