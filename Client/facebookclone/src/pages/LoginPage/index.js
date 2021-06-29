import "../../css/style.css";

import React, {useState} from "react";
import {Link} from 'react-router-dom';
import axios from 'axios';


    const LoginPage = () => {
        const [formData, setFormData] = useState ({
            email:"",
            password:""
        })
        const { 
            email,
            password
        } = formData;
        const onChange = (e) =>{
            setFormData({...formData, [e.target.name]:e.target.value});
        }

        const onSubmit = async e => {
            try {
                e.preventDefault();
                const config = {
                    headers:{
                        "Content-Type": "application/json"
                    }
                }
                const body= JSON.stringify({
                    email,
                    password
                });
                const res = await axios.post('http://localhost:4000/api/auth', body, config);
                console.log(res.data);
            } catch (err) {
                console.error(err.response.data);
                
            }
        }
        return ( 
            <section class="login-form">
                <form onSubmit = {e => onSubmit(e)}>
                    <input 
                        type="email" 
                        class="login-form__email"
                        name="email" 
                        placeholder="Email or Phone Number"
                        value={email} 
                        onChange={e => onChange(e)}
                    />
                    <input
                        type="password"
                        class="login-form__password"
                        name="password" 
                        placeholder="Password"
                        value={password} 
                        onChange={e => onChange(e)}
                    />
                    <input type="submit" class="text-white login-form__login" className="btn btn-blue" value="Login"/>
                </form>
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