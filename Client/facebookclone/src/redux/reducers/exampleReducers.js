import { createSlice } from "@reduxjs/toolkit";

export const exampleReducers = createSlice({
  name: "example",
  initialState: {
    number: 0,
  
  },
  reducers: {
    increamentByValue:async (state, action) => {
      
      state.number += action.payload;
    
    },
  },
});


export const { increamentByValue } = exampleReducers.actions;
export default exampleReducers.reducer;
