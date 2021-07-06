import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';




export const postSlice = createSlice({
  name: "postCRD",
  initialState: {
    createPost: false,
    isLoading: true,
    error:'',
    post:null,
    posts:[]
    
  },
  reducers: {
    createPost1 : (state, {payload}) =>{
        state.isLoading = false;
        state.createPost = payload;
    },
    postCreation : (state,{payload}) =>{
      
      state.error = '';
      state.isLoading = false;
      state.post= payload

    },
    postLoaded: (state, {payload}) => {
      state.isLoading = false;
      state.error=null;
      state.posts= payload;
    }
  }
});




const {reducer , actions} =postSlice;
export const {createPost1, postCreation, postLoaded} =actions;
export default reducer;

export const fetchPosts = () => async (dispatch) => {
  
 
  try{
   const res = await axios.get('http://localhost:4000/api/Post');
   
   if(res.status === 200){
     dispatch(postLoaded(res.data));
   
   } 
 
   
  }
  catch(err){
   console.log(err.message);
 }
 }