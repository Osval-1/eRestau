import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import homeServices from "../../services/restau/homeServices";
import orderServices from "../../services/restau/orderServices";


 export const getDashboard = createAsyncThunk(
    "restauDashboard",
    async(thunkAPI)=>{
        try{
            const res = await homeServices.getDashboard()
            return {res} 
        }catch(error){
            const message = (error.message && error.response.data && error.response.data.message) ||
            error.message ||
            error.toString();
            thunkAPI.rejectWithValue(message)
        }
    }
 )
 export const getOrder = createAsyncThunk(
    "getOrders",
    async(thunkAPI)=>{
        try{
            const res = await orderServices.getOrder()
            return {res} 
        }catch(error){
            const message = (error.message && error.response.data && error.response.data.message) ||
            error.message ||
            error.toString();
            thunkAPI.rejectWithValue(message)
        }
    }
 )
 export const editProfile = createAsyncThunk(
    "editProfile",
    async(data,thunkAPI)=>{
        try{
            const res = await homeServices.editProfile(data)
            return {res} 
        }catch(error){
            const message = (error.message && error.response.data && error.response.data.message) ||
            error.message ||
            error.toString();
            thunkAPI.rejectWithValue(message)
        }
    }
 )




const initialState={
    orders:[],
    cart:[]
}

const restauSlice = createSlice({
    name:"restau",
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder
        .addCase(getDashboard.fulfilled, (state, action) => {
          state.loading = false;
        }).addCase(getDashboard.rejected, (state, action) => {
            state.loading = false;}),builder
            .addCase(getOrder.fulfilled, (state, action) => {
              state.loading = false;
            }).addCase(getOrder.rejected, (state, action) => {
                state.loading = false;}),builder
                .addCase(editProfile.fulfilled, (state, action) => {
                  state.loading = false;
                }).addCase(editProfile.rejected, (state, action) => {
                    state.loading = false;})
    }
})
export const{}= restauSlice.actions
export default restauSlice.reducer