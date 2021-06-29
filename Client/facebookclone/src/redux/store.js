import { configureStore } from "@reduxjs/toolkit";
import exampleReducers from "./reducers/exampleReducers";

export default configureStore({
  reducer: {
    exampleReducers: exampleReducers,
  },
});
