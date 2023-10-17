import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import menuServices from "../../services/restau/menuServices";
import homeServices from "../../services/restau/homeServices";

export const getMenu = createAsyncThunk("getMenu", async (thunkAPI) => {
  try {
    const res = await menuServices.getMenu();
    return { res };
  } catch (error) {
    const message =
      (error.message && error.response.data && error.response.data.message) ||
      error.message ||
      error.toString();
    thunkAPI.rejectWithValue(message);
  }
});
export const updateMenu = createAsyncThunk(
  "updateMenu",
  async (data, thunkAPI) => {
    try {
      const res = await menuServices.updateMenu(data);
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
export const setMenu = createAsyncThunk("setMenu", async (data, thunkAPI) => {
  try {
    const res = await menuServices.setMenu(data);
    // return { res };
  } catch (error) {
    const message =
      (error.message && error.response.data && error.response.data.message) ||
      error.message ||
      error.toString();
    thunkAPI.rejectWithValue(message);
  }
});
export const removeMenu = createAsyncThunk(
  "deleteMenu",
  async (data, thunkAPI) => {
    try {
      const res = await menuServices.deleteMenu(data);
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
      .addCase(getMenu.fulfilled, (state, action) => {
        return action.payload.res.products
      })
      .addCase(getMenu.rejected, (state, action) => {
        // state.loading = false;
      }),
      builder
        .addCase(setMenu.fulfilled, (state, action) => {})
        .addCase(setMenu.rejected, (state, action) => {}),
      builder
        .addCase(updateMenu.fulfilled, (state, action) => {
          state.loading = false;
        })
        .addCase(updateMenu.rejected, (state, action) => {
          state.loading = false;
        }),
      builder
        .addCase(removeMenu.fulfilled, (state, action) => {
          state.loading = false;
        })
        .addCase(removeMenu.rejected, (state, action) => {
          state.loading = false;
        });
  },
});

export const { addMenu, deleteMenu } = menuSlice.actions;
export default menuSlice.reducer;
