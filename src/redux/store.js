import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./reducers/authReducer";
import cartSlice from "./reducers/user/cartReducer";

const store = configureStore({
  reducer: {
    auth: authSlice,
    cart: cartSlice,
  },
});
export default store;
