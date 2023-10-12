import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./reducers/authReducer";
import cartSlice from "./reducers/user/cartReducer";
import menuSlice from "./reducers/restau/menuReducer"

const store = configureStore({
  reducer: {
    auth: authSlice,
    cart: cartSlice,
    menu:menuSlice,
  },
});
export default store;
