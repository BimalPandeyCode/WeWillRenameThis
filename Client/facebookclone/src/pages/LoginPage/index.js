import "../../css/style.css";

import React, {useState} from "react";
import {Link, useHistory} from 'react-router-dom';

import { login } from '../../redux/api/authapi.js';
import { loginSuccess, loginFail, fetchUserById } from '../../redux/reducers/auth.js';
import { useDispatch, useSelector } from 'react-redux'; 


    const LoginPage = () => {
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
                
                const success = await login({email, password});
                
                
                    if (success) {
                        dispatch(loginSuccess());
                        console.log('helloworld');
                        dispatch(fetchUserById());
                        console.log('helloworld')
                        history.push('/home');
                    }
                  } catch (err) {
                console.log(err.message);
                dispatch(loginFail());
                
            }
        }
        const {isAuthenticated}= useSelector((state) => state.signin);
            if(isAuthenticated){
                history.push('/home')
            }
        
        return ( 
            <section className="login-form">
                <form onSubmit = {e => onSubmit(e)}>
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