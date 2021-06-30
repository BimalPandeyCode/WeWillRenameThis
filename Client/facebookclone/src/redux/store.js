import { configureStore } from "@reduxjs/toolkit";
import exampleReducers from "./reducers/exampleReducers";
import signinReducers from "./reducers/auth.js";

export default configureStore({
  reducer: {
    exampleReducers: exampleReducers,
    signin: signinReducers
  },
});
