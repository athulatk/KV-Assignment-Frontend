import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value:0,
}

export const counterSlice = createSlice({
    name:'counter',
    initialState,
    reducers:{
        increment:(counter)=>{
            counter.value+=1
        },
        decrement:(counter)=>{
            counter.value-=1
        },
        incrementByAmount: (counter,action)=>{
            counter.value+=action.payload
        },
        decrementByAmount: (counter,action)=>{
            counter.value-=action.payload
        }
    }
})

export const { increment, decrement, incrementByAmount, decrementByAmount } = counterSlice.actions
export default counterSlice.reducer