import { configureStore } from "@reduxjs/toolkit";
import counterSlice from './CounterSlice.js'



export const store = configureStore({
    reducer:{
        counter:counterSlice
    }
})