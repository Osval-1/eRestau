import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import homeServices from "../../services/restau/homeServices";
import orderServices from "../../services/restau/orderServices";

export const getRestauDashboard = createAsyncThunk(
  "getRestauDashboard",
  async (data,thunkAPI) => {
    try {
      const res = await orderServices.getRestauDashboard(data);
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
export const getOrders = createAsyncThunk("getOrders", async (data,thunkAPI) => {
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
});
export const editProfile = createAsyncThunk(
  "editProfile",
  async (data, thunkAPI) => {
    try {
      const res = await homeServices.editProfile(data);
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

const initialState = {
  orders: [],
  completedOrders:[]
};

const restauSlice = createSlice({
  name: "restau",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getRestauDashboard.fulfilled, (state, action) => {
        state.loading = false;
        state.completedOrders = action.payload.res.orders
      })
      .addCase(getRestauDashboard.rejected, (state, action) => {
        state.loading = false;
      }),
      builder
        .addCase(getOrders.fulfilled, (state, action) => {
          state.orders= action.payload.res.orders;
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
export const {} = restauSlice.actions;
export default restauSlice.reducer;
