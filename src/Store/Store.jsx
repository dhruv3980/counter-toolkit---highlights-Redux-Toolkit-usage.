import { configureStore } from "@reduxjs/toolkit";
import counte from "../Slice/CounterSlice"

const  Store = configureStore({
    reducer:{
        counte:counte

    }
 })

 export default Store;