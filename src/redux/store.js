import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./reducers/authReducer";

const store = configureStore({
  reducer: {
    auth: authSlice,
  },
});
export default store;
