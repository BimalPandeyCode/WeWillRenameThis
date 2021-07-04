import "../../css/style.css";

import React, {useState, useEffect} from "react";
import {Link, useHistory, Redirect} from 'react-router-dom';

import { login } from '../../redux/api/userApi.js';
import { loginFail, loginSuccess, fetchUserById} from '../../redux/reducers/auth.js';


import { useDispatch, useSelector } from 'react-redux'; 


    const LoginPage = () => {
        const {isAuthenticated}= useSelector((state) => state.signin);
        useEffect(() => {
            console.log(isAuthenticated)
             
        if(isAuthenticated === true){
            return <Redirect to ="/home" />
        }
        },[isAuthenticated]);
        
        const history = useHistory();
        const dispatch = useDispatch();
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
            e.preventDefault();
            try {
                const isAuth = await login({email, password});
                console.log(isAuth);
                dispatch(loginSuccess());
                dispatch(fetchUserById());
                history.push('/home');
                } catch (err) {
                console.log(err.message);
                dispatch(loginFail(err.message));
                
            }
        }
        
       
           
             
        if(isAuthenticated === true){
            return <Redirect to ="/home" />
        }
       
      
        
        return ( 
            <section className="login-form">
                <form onSubmit = {onSubmit}>
                    <input 
                        type="email" 
                        className="login-form__email"
                        name="email" 
                        placeholder="Email or Phone Number"
                        value={email} 
                        onChange={e => onChange(e)}
                    />
                    <input
                        type="password"
                        className="login-form__password"
                        name="password" 
                        placeholder="Password"
                        value={password} 
                        onChange={e => onChange(e)}
                    />
                    <input type="submit" className="text-white login-form__login" className="btn btn-blue" value="Login"/>
                </form>
            <div className="border-bottom">
                <Link to="/forgot-password" className="login-form__forgotpassword">Forgot Password?</Link>
            </div>
            <div className="btn btn-anchorgreen">
                <Link to="/signin" className="remove-textdecoration text-white">Create New Account</Link>
            </div>
        </section>
        
        )
      };
   



export default LoginPage;