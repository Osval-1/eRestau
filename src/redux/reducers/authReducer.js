import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import authServices from "../services/authServices";

export const signup = createAsyncThunk(
  "authentication/signup",
  async (data, thunkAPI) => {
    try {
      return await authServices.signup(data);
    } catch (error) {
      const message =
        (error.message && error.response.data && error.response.data.message) ||
        error.message ||
        error.toString();

      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const signin = createAsyncThunk(
  "authentication/signin",
  async (data, thunkAPI) => {
    try {
      const res = await authServices.signin(data);
      return { res };
    } catch (error) {
      const message =
        (error.message && error.response.data && error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);
export const logout = createAsyncThunk(
  "authentication/logout",
  async (thunkAPI) => {
    try {
      return await authServices.logout();
    } catch (error) {
      const message =
        (error.message && error.response.data && error.response.data.message) ||
        error.message ||
        error.toString();

      return thunkAPI.rejectWithValue(message);
    }
  }
);
export const getTokenAsync = createAsyncThunk(
  "authentication/getTokenAsync",
  async (thunkAPI) => {
    try {
      const res = await authServices.getTokenAsync();
      return { res };
    } catch (error) {
      const message =
        (error.message && error.response.data && error.response.data.message) ||
        error.message ||
        error.toString();

      return thunkAPI.rejectWithValue(message);
    }
  }
);

const initialState = { user: "", userRole: "", token: ""};

export const authSlice = createSlice({
  name: "authentication",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(signin.fulfilled, (state, action) => {
      state.user = action.payload.res;
    }),
      builder.addCase(logout.fulfilled, (state) => {
        state.user = "";
        state.userRole = "";
        state.token = "";
      }),
      builder.addCase(getTokenAsync.fulfilled, (state, action) => {
        if (!state.user) {
          state.user = action.payload.res.userData
        }
        state.userRole = action.payload.res.userRole;
        state.token = action.payload.res.token;
      });
  },
});

export const {} = authSlice.actions;

export default authSlice.reducer;
