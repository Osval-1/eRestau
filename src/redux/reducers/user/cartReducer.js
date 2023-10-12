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
    
    },
    extraReducers:(builder)=>{

    }
})

export default cartSlice.reducer