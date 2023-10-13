import { createSlice } from "@reduxjs/toolkit";

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

    }
})

export default cartSlice.reducer