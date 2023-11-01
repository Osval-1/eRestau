import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import menuServices from "../../services/restau/menuServices";
import homeServices from "../../services/restau/homeServices";

export const getAllMenu = createAsyncThunk(
  "getAllMenu",
  async (data, thunkAPI) => {
    try {
      const res = await menuServices.getAllMenu(data);
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
export const updateSingleMenu = createAsyncThunk(
  "updateSingleMenu",
  async (data, thunkAPI) => {
    try {
      const res = await menuServices.updateSingleMenu(data);
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
export const addSingleMenu = createAsyncThunk(
  "addSingleMenu",
  async (data, thunkAPI) => {
    try {
      const res = await menuServices.addSingleMenu(data);
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
export const deleteSingleMenu = createAsyncThunk(
  "deleteSingleMenu",
  async (data, thunkAPI) => {
    try {
      const res = await menuServices.deleteSingleMenu(data);
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
const initialState = [];

const menuSlice = createSlice({
  name: "menuSlice",
  initialState,
  reducers: {
    addMenu: (state, action) => {
      return state.push(action.payload);
    },
    deleteMenu: (state, action) => {
      return state.filter((item) => item.id !== action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllMenu.fulfilled, (state, action) => {
        return action.payload.res.products;
      })
      builder
        .addCase(addSingleMenu.fulfilled, (state, action) => {})
        .addCase(addSingleMenu.rejected, (state, action) => {}),
      builder
        .addCase(updateSingleMenu.fulfilled, (state, action) => {
          state.loading = false;
        })
        .addCase(updateSingleMenu.rejected, (state, action) => {
          state.loading = false;
        }),
      builder
        .addCase(deleteSingleMenu.fulfilled, (state, action) => {
        })
        .addCase(deleteSingleMenu.rejected, (state, action) => {
        });
  },
});

export const { addMenu, deleteMenu } = menuSlice.actions;
export default menuSlice.reducer;
