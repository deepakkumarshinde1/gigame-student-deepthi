import { createSlice } from "@reduxjs/toolkit";

let UserSlice = createSlice({
    name:"UserSlice",
    initialState:{
        newUser:{
            name:"",
            email:"",
            mobile:"",
            password:""
        }
    },
    reducers:{
        handelNewUserInput(state,action){
            state.newUser[action.payload.name] = action.payload.value;
        }
    }
});

export default UserSlice;
export const {handelNewUserInput} = UserSlice.actions;