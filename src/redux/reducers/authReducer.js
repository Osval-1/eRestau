import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import authServices from "../services/authServices";

const initialState = {user:''};

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
      return {res};
    } catch (error) {
      const message =
        (error.message && error.response.data && error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);
export const authSlice = createSlice({
  name: "authentication",
  initialState,
  reducers: {
    logoutUser: (state) => {
      state.user = "";
    },
    logoutRestau: (state) => {
      state.restau = "";
    },
  },
  extraReducers: (builder) => {
    builder.addCase(signup.fulfilled, (state, action) => {
      // state.user = action.payload;
      console.log(state.user)
    }),
    builder.addCase(signin.fulfilled, (state, action) => {
        state.user = action.payload.res
      });
  },
});

export const { logout } = authSlice.actions;

export default authSlice.reducer;
