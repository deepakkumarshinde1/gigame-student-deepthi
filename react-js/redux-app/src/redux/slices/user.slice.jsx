import { createSlice } from "@reduxjs/toolkit";
import { addUsers, getUsers } from "../services/user.service";

let UserSlice = createSlice({
    name:"UserSlice",
    initialState:{
        newUser:{
            name:"",
            email:"",
            mobile:"",
            password:""
        },
        loading:false,
        error:null,
        users:[],
        saveIndicator:false,
        isNewUserAdded:false
    },
    reducers:{
        handelNewUserInput(state,action){
            state.newUser[action.payload.name] = action.payload.value;
        }
    },extraReducers:(builder)=>{
        // getUser
        builder
          .addCase(getUsers.pending, (state, action) => {
            //code
            state.loading = true;
            state.error = null;
          })
          .addCase(getUsers.fulfilled, (state, action) => {
            //code
            state.loading = false;
            state.users = action.payload;
          })
          .addCase(getUsers.rejected, (state, action) => {
            //code
            state.loading = false;
            state.error = action.error.message;
          });


        //addUser
         builder
           .addCase(addUsers.pending, (state, action) => {
             //code
             state.saveIndicator = true;
             state.error = null;

           })
           .addCase(addUsers.fulfilled, (state, action) => {
             //code
             state.saveIndicator = false;
             state.isNewUserAdded = true;
           })
           .addCase(addUsers.rejected, (state, action) => {
             //code
             state.saveIndicator = false;
             state.error = action.error.message;
           });
    }
});

export default UserSlice;
export const {handelNewUserInput} = UserSlice.actions;