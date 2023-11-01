import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import cartServices from "../../services/user/cartServices";

export const setCart = createAsyncThunk("setCart", async (data, thunkAPI) => {
  try {
    const res = await cartServices.setCart(data);
    return { res };
  } catch (error) {
    const message =
      (error.message && error.response.data && error.response.data.message) ||
      error.message ||
      error.toString();
    thunkAPI.rejectWithValue(message);
  }
});

const initialState = {
  count: 1,
  cart: [],
};

const cartSlice = createSlice({
  name: "cartSlice",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const newProduct = {
        id: Date.now().toString(),
        quantity: action.payload.amount,
        productName: action.payload.name,
        price: action.payload.price,
        createdBy: action.payload.owner,
        orderedBy: action.payload.id,
        image:action.payload.image,
        status:"pending"
      };
      state.count = 1
      state.cart.push(newProduct);
    },
    deleteFromCart: (state, action) => {
      state.cart =  state.cart.filter((item) => item.id !== action.payload);
    },
    incrementCount: (state, action) => {
      state.count += 1;
    },
    decrementCount: (state, action) => {
      state.count -= 1;
    },
    resetCount: (state, action) => {
      state.count = 1;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(setCart.fulfilled, (state, action) => {
        state.cart = []
        state.count = 1
      })
      .addCase(setCart.rejected, (state, action) => {
        state.loading = false;
      });
  },
});
export const { addToCart, deleteFromCart, incrementCount, decrementCount,resetCount } =
  cartSlice.actions;
export default cartSlice.reducer;
