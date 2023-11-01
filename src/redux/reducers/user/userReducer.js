import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import homeServices from "../../services/user/homeServices";
import orderServices from "../../services/user/orderServices";

export const getRecentlyViewed = createAsyncThunk(
  "getRecentlyViewed",
  async (thunkAPI) => {
    try {
      const res = await homeServices.getRecentlyViewed();
      return { res };
    } catch (error) {
      const message =
        (error.message && error.response.data && error.response.data.message) ||
        error.message ||
        error.toString();
      thunkAPI.rejectWithValue(message);
    }
  }
);
export const search = createAsyncThunk("search", async (data, thunkAPI) => {
  try {
    const res = await homeServices.search(data);
    return { res };
  } catch (error) {
    const message =
      (error.message && error.response.data && error.response.data.message) ||
      error.message ||
      error.toString();
    thunkAPI.rejectWithValue(message);
  }
});
export const getSingleProduct = createAsyncThunk(
  "getSingleProduct",
  async (data, thunkAPI) => {
    try {
      const res = await homeServices.getSingleProduct(data);
      return { res };
    } catch (error) {
      const message =
        (error.message && error.response.data && error.response.data.message) ||
        error.message ||
        error.toString();
      thunkAPI.rejectWithValue(message);
    }
  }
);
export const getOrders = createAsyncThunk(
  "user/getOrders",
  async (data, thunkAPI) => {
    try {
      const res = await orderServices.getOrder(data);
      return { res };
    } catch (error) {
      const message =
        (error.message && error.response.data && error.response.data.message) ||
        error.message ||
        error.toString();
      thunkAPI.rejectWithValue(message);
    }
  }
);
export const editProfile = createAsyncThunk("editProfile", async (thunkAPI) => {
  try {
    const res = await homeServices.editProfile();
    return { res };
  } catch (error) {
    const message =
      (error.message && error.response.data && error.response.data.message) ||
      error.message ||
      error.toString();
    thunkAPI.rejectWithValue(message);
  }
});

const initialState = { recentlyViewed: [], orders: [] };

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getRecentlyViewed.fulfilled, (state, action) => {
        state.recentlyViewed = action.payload.res.product;
      })
      .addCase(getRecentlyViewed.rejected, (state, action) => {
        state.loading = false;
      }),
      builder
        .addCase(search.fulfilled, (state, action) => {
          state.loading = false;
        })
        .addCase(search.rejected, (state, action) => {
          state.loading = false;
        }),
      builder
        .addCase(getSingleProduct.fulfilled, (state, action) => {
          state.loading = false;
        })
        .addCase(getSingleProduct.rejected, (state, action) => {
          state.loading = false;
        }),
      builder
        .addCase(getOrders.fulfilled, (state, action) => {
          state.orders = action.payload.res;
        })
        .addCase(getOrders.rejected, (state, action) => {
          state.loading = false;
        }),
      builder
        .addCase(editProfile.fulfilled, (state, action) => {
          state.loading = false;
        })
        .addCase(editProfile.rejected, (state, action) => {
          state.loading = false;
        });
  },
});

export const {} = userSlice.actions;
export default userSlice.reducer;
