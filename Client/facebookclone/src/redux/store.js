import { configureStore } from "@reduxjs/toolkit";
import exampleReducers from "./reducers/exampleReducers";
import signinReducers from "./reducers/auth.js";
import postReducers from "./reducers/Post.js"

export default configureStore({
  reducer: {
    exampleReducers: exampleReducers,
    signin: signinReducers,
    postCRD: postReducers
  },
});
