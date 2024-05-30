import { createSlice } from "@reduxjs/toolkit";


export const counterSlice = createSlice({
    name:"CounterApp",
    initialState:{
        value:0
    },
    reducers:{
        increment:(state,action)=>{
            state.value +=action.payload
        },
        decrement:(state,action)=>{
            state.value -=action.payload
        },
        reset:(state)=>{
            state.value = 0
        }
    }
})

//action
export const {increment,decrement,reset} = counterSlice.actions
//reducer
export default counterSlice.reducer