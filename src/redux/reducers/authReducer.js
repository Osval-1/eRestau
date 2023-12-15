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
        console.log(message)
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
      if(error.code === 'ECONNABORTED'){
        const errorMessage = "connection timed out ,Please check your internet connection"
   return thunkAPI.rejectWithValue(errorMessage);    
     }
      const message =
        (error.message && error.response.data && error.response.data.message) ||
        error.message ||
        error.toString();
        console.log(message)
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

const initialState = { user: "", userRole: "", token: "",error:'',loginInfo:''};

export const authSlice = createSlice({
  name: "authentication",
  initialState,
  reducers: {
    saveLoginInfo:(state,action)=>{
      state.loginInfo = {...action.payload}
    },
    updateDeliveryInfo:(state,action)=>{
      state.loginInfo = {...state.loginInfo,hasDelivery:action.payload}
    }
  },
  extraReducers: (builder) => {
    builder.addCase(signin.fulfilled, (state, action) => {
      state.user = action.payload.res;
    }),
      builder.addCase(logout.fulfilled, (state) => {
        state.user = "";
        state.userRole = "";
        state.token = "";
      })
      .addCase(logout.rejected, (state,action) => {
        state.error = action.error.message;
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

export const {saveLoginInfo,updateDeliveryInfo} = authSlice.actions;

export default authSlice.reducer;
