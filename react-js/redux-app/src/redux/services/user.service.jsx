import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "../config/axios.config";

export const getUsers = createAsyncThunk("UserSlice/getUsers", async () => {
  let { data } = await api.get("/users");
  console.log(data);
  return data;
});
export const addUsers = createAsyncThunk("UserSlice/addUsers", async (newUser) => {
  let { data } = await api.post("/users", newUser);
  return data;
});
