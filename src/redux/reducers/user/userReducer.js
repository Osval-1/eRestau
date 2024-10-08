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
export const uploadToken = createAsyncThunk(
  "uploadToken",
  async (data, thunkAPI) => {
    try {
      const res = await homeServices.uploadToken(data);
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
      console.log(res);
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

const initialState = {
  recentlyViewed: [],
  orders: [],
  frequentlyBought:[],
  search: [],
  loading: false,
  category: "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    clearSearch: (state) => {
      state.search = [];
      state.category = "";
    },
    searchCategory: (state, action) => {
      state.category = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getRecentlyViewed.fulfilled, (state, action) => {
        state.recentlyViewed = action.payload.res.product;
        state.frequentlyBought = action.payload.res.frequentlyBoughtProducts;
      })
      .addCase(getRecentlyViewed.rejected, (state, action) => {
        state.loading = false;
      }),
      builder
        .addCase(search.fulfilled, (state, action) => {
          state.search = action.payload.res;
          state.loading = false;
        })
        .addCase(search.pending, (state, action) => {
          state.loading = true;
        })
        .addCase(search.rejected, (state, action) => {
          state.loading = false;
        }),
      builder
        .addCase(uploadToken.fulfilled, (state, action) => {
          // state.search= action.payload.res
          // state.loading = false
        })
        .addCase(uploadToken.pending, (state, action) => {
          // state.loading = true
        })
        .addCase(uploadToken.rejected, (state, action) => {
          // state.loading = false;
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
          state.orders = action.payload.res.order;
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

export const { clearSearch, searchCategory } = userSlice.actions;
export default userSlice.reducer;
