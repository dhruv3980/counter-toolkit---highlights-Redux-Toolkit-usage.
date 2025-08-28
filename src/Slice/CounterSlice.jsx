import { createSlice } from "@reduxjs/toolkit";


const CounterSlice = createSlice({
    name:"Counter",

    initialState:{
        value:0
    },

    reducers:{
        increment:(state,action)=>{
            state.value=state.value+1;
        },

        decrement: (state, action)=>{
            state.value= state.value-1;
        },

        incrementByAmmount :(state, action)=>{
            state.value+=action.payload;
        },

        reset:(state, action)=>{
            state.value =0;
        }
    }
});


export const  {increment, decrement, incrementByAmmount, reset} = CounterSlice.actions
export default CounterSlice.reducer;
