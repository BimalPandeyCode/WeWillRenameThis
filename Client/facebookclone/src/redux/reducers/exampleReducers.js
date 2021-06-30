import { createSlice } from "@reduxjs/toolkit";

export const exampleReducers = createSlice({
  name: "example",
  initialState: {
    number: 0,
    isAuthenticated: false,
    loading :true
  },
  reducers: {
    increamentByValue:async (state, action) => {
      
      state.number += action.payload;
      state.isAuthenticated = true;
      state.loading = false;
    },
  },
});


export const { increamentByValue } = exampleReducers.actions;
export default exampleReducers.reducer;
