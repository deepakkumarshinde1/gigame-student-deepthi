import { configureStore } from "@reduxjs/toolkit";
import CounterSlice from "./slices/counter.slice";
import UserSlice from "./slices/user.slice";

const store = configureStore({
  reducer: {
    counterReducer: CounterSlice.reducer,
    userReducer: UserSlice.reducer,
  },
});

export default store;
