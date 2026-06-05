import { createSlice } from "@reduxjs/toolkit";

let CounterSlice = createSlice({
    name:"CounterSlice",
    initialState:{
          count:0
    },
    reducers:{
        increment(state,action){
          // action => {type:"CounterSlice/increment",payload:data}
          state.count += 1;
        },
        decrement(){}
    }
});

export default CounterSlice;
export const {increment} = CounterSlice.actions;