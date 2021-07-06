import axios from 'axios';


export const login = async({ email, password }) =>{
return new Promise( async(resolve, reject) =>{
    try{
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }
        const body = JSON.stringify({  email, password})
         const res = await axios.post('/api/auth', body, config);
        console.log(res);
        resolve(res.data);
        localStorage.setItem('token',res.data.token);
             
         } catch (err) {
             console.log(err.message);
             reject(err);
         }
}) 

 }
 export const register = async({firstname , lastname, email, password, date, gender}) =>{
   
return new Promise( async(resolve, reject) =>{
  try{
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
     }
     const body = JSON.stringify({ firstname, lastname, email, password, date, gender});
     const res = await axios.post('/api/user', body, config);
     resolve(res.data);
    localStorage.setItem('token',res.data.token);
     } catch (err) {
         console.log(err.message);
         reject(err);
         
         
     }
    });
  };


  export const createPost = async({text}) =>{
   
    return new Promise( async(resolve, reject) =>{
      try{
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
         }
         const body = JSON.stringify({text});
       
         const res = await axios.post('http://localhost:4000/api/Post', body, config);
        
         resolve(res.data);
        
         } catch (err) {
             console.log('hellow world')
             console.log(err.message);
             reject(err);
             
             
         }
        });
      }