import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./reducers/authReducer";
import cartSlice from "./reducers/user/cartReducer";
import menuSlice from "./reducers/restau/menuReducer";
import userSlice from "./reducers/user/userReducer";
import restauSlice from "./reducers/restau/restauReducer";
import { eRestauApi } from "./api";
const store = configureStore({
  reducer: {
    auth: authSlice,
    cart: cartSlice,
    menu: menuSlice,
    user: userSlice,
    restau: restauSlice,
    [eRestauApi.reducerPath]: eRestauApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(eRestauApi.middleware),
});
export default store;
