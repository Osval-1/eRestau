import { createSlice } from "@reduxjs/toolkit";

const initialState =[{
    id:"sadasda",label:"Roasted Tilapia",
servings:"15 servings",
price:"5000 CFA"},
{
    id:"sadada",label:"Roasted Tilapia",
servings:"15 servings",
price:"5000 CFA"}]


const menuSlice = createSlice ({
    name:"menuSlice",
    initialState,
    reducers:{
        addMenu:(state,action)=>{
            return state.push(action.payload)
        },deleteMenu:(state,action)=>{
          return  state.filter((item)=>item.id !== action.payload)
        }
    },
    extraReducers:(builder)=>{

    }

})

export const{addMenu,deleteMenu} = menuSlice.actions
export default menuSlice.reducer