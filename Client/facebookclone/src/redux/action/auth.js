// // postsActions.js
import { REGISTER_SUCCESS, REGISTER_FAILURE, LOGIN_SUCCESS, LOGIN_FAILURE} from './types.js';

//Register User
export const register = ({name, email, password}) => async dispatch =>{
    const config = {
        headers:{
            "Content-Type": "application/json"
        }
    }
    const body= JSON.stringify({
        firstname,
        lastname,
        email,
        password,
        date
    });

    
   
    try{
        const res = await axios.post('http://localhost:4000/api/user', body, config);
        // localStorage.setItem('token', res.data.token);
        

        dispatch({
            type: REGISTER_SUCCESS,
            payload: res.data
        });

        dispatch(loadUser());
    }catch(err){
        const errors = err.response.data.errors;
      
        if(errors) {
            errors.forEach(error => dispatch(setAlert(error.msg, 'danger')))
        }
        dispatch({ 
            type: REGISTER_FAILURE
        })
    }
    
}