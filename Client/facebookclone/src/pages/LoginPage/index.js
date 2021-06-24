import "../../css/style.css";

import React from "react";
import {Link} from 'react-router-dom';


    const LoginPage = () => {
        return ( 
            <section class="login-form">
            <input type="email" class="login-form__email" placeholder="Email or Phone Number"/>
            <input type="password" class="login-form__password" placeholder="Password"/>
            <div class="btn btn-blue">
                <a href="#" class="text-white login-form__login">Log In</a>
            </div>
            <div class="border-bottom">
                <Link to="/forgot-password" class="login-form__forgotpassword">Forgot Password?</Link>
            </div>
            <div class="btn btn-anchorgreen">
                <Link to="/signin" class="remove-textdecoration text-white">Create New Account</Link>
            </div>
        </section>
        
        )
      }
   



export default LoginPage;