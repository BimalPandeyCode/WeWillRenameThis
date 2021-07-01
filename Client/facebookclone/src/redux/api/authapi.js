
import axios from 'axios';





export const register = async({firstname , lastname, email, password, date, gender}) =>{
   
   const config = {
    headers: {
        'Content-Type': 'application/json'
    }
}
const body = JSON.stringify({ firstname, lastname, email, password, date, gender})
try{
    const res = await axios.post('/api/user', body, config);
        if(res.status=== 200){
            localStorage.setItem('token', res.data.token);
            return true;
        }
    } catch (err) {
        console.log(err.message);
        return false;
        
        
    }
}
export const login = async({ email, password }) =>{
    const config = {
     headers: {
         'Content-Type': 'application/json'
     }
 }
 const body = JSON.stringify({  email, password})
 try{
     const res = await axios.post('/api/auth', body, config);
     console.log(res)
         if(res.status=== 200){
             localStorage.setItem('token', res.data.token);
             console.log("hello")
             return true;
         }
     } catch (err) {
         console.log(err.message);
         return false;
         
         
     }
 }
 