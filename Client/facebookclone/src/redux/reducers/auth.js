import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import setAuthToken from '../../pages/utilities/setAuthToken.js';





// // First, create the thunk
// export const fetchUserById = createAsyncThunk(
//   'users/fetchByIdStatus',
//   async (thunkAPI) => {
//     if(localStorage.token){
//       setAuthToken(localStorage.token);
//     }
//     try {
//         const res = axios.get('http://localhost:4000/api/auth');
//         if(res.status === 200){
//           return res.data;
//         }   
//   }
//   catch(err){
//     console.log(err.message);
//   }
// }
// )

export const signinSlice = createSlice({
  name: "authentication",
  initialState: {
    token: localStorage.getItem('token'),
    isAuthenticated: false,
    isLoading: true,
    error:'',
    user: null,
    
  },
  reducers: {
    signinPending : (state) =>{
        state.isLoading = true;
    },
    signinSuccess: (state) =>{
        state.isLoading = false;
        state.isAuthenticated = true;
        state.error ="";
    },
    signinFail: (state, {payload}) => {
        state.isLoading = false;
        state.error = payload;
    },
    loginSuccess: (state) =>{
      state.isLoading = false;
      state.isAuthenticated = true;
  },
  loginFail: (state, {payload}) => {
      state.isLoading = false;
      state.error = payload;
  },
    UserLoaded: (state, {payload}) => {
      state.isLoading = false;
      state.isAuthenticated =true;
      state.user = payload.user;

    }
  }
});



const {reducer , actions} =signinSlice;
export const {signinPending, signinSuccess, signinFail, loginSuccess, UserLoaded,loginFail} =actions;

export const fetchUserById = () => async (dispatch) => {
  
  if(localStorage.token){
    setAuthToken(localStorage.token);
  }
 try{
  const res = await axios.get('http://localhost:4000/api/auth');
  
  if(res.status === 200){
    dispatch(UserLoaded(res.data));
  } 

  
 }
 catch(err){
  console.log(err.message);
}
}



export default reducer;