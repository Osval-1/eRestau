import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import authServices from "../services/authServices";

const initialState = { user: "", loading: false };

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
export const authSlice = createSlice({
  name: "authentication",
  initialState,
  reducers: {
    logoutUser: (state) => {
      state.user = "";
    },
    
  },
  extraReducers: (builder) => {
    builder
      .addCase(signup.fulfilled, (state, action) => {
        state.loading = false;
      })
      .addCase(signup.pending, (state, action) => {
        state.loading = true
      }).addCase(signup.rejected, (state, action) => {
        state.loading = false
      }),

      builder.addCase(signin.fulfilled, (state, action) => {
        state.user = action.payload.res;
        state.loading = false
      }).addCase(signin.pending, (state, action) => {
        state.loading = true
      }).addCase(signin.rejected, (state, action) => {
        state.loading = false
      })
  },
});

export const { logoutUser } = authSlice.actions;

export default authSlice.reducer;
