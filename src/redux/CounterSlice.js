import { createSlice } from "@reduxjs/toolkit";


export const counterSlice = createSlice({
    name:"CounterApp",
    initialState:{
        value:0
    },
    reducers:{
        increment:(state)=>{
            state.value +=1
        },
        decrement:(state)=>{
            state.value -=1
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