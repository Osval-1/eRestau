import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import cartServices from "../../services/user/cartServices";


export const setCart = createAsyncThunk(
    "setCart",
    async(data,thunkAPI)=>{
        try{

            const res = await cartServices.setCart(data)
            return {res}
        }catch(error){
            const message = (error.message && error.response.data && error.response.data.message) ||
            error.message ||
            error.toString();
            thunkAPI.rejectWithValue(message)
    }}
)

const initialState =[
    {   id:"adssaffasd",
        amount:"3x",
        label:"Roasted Tilapia",
        expectedTime:"30 mins ago",
        currentStatus:"in progress",
        date:"2023-04-07"
    },
    {   id:"adssafasd",
    amount:"3x",
    label:"Roasted Tilapia",
    expectedTime:"30 mins ago",
    currentStatus:"in progress",
    date:"2023-04-07"
},
]

const cartSlice = createSlice({
    name:"cartSlice",
    initialState,
    reducers:{
    addCart:(state,action)=>{
        state.push(action.payload)
    },deleteCart:(state,action)=>{
        return  state.filter((item)=>item.id !== action.payload)
      }
    },
    extraReducers:(builder)=>{
        builder
        .addCase(setCart.fulfilled, (state, action) => {
          state.loading = false;
        }).addCase(setCart.rejected, (state, action) => {
            state.loading = false;})
    }
})

export default cartSlice.reducer