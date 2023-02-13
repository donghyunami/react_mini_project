import { createSlice } from "@reduxjs/toolkit";
import { asyncIncreamentCount } from "../actions/counter";

const initialState = {
  value: 0,
  status: "Welcome",
};

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increament: (state, action) => {
      console.log({ state: state.value, payload: action });
      state.value = state.value + action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(asyncIncreamentCount.pending, (state)=>{
      state.status = 'Loading';
    })
    builder.addCase(asyncIncreamentCount.fulfilled, (state,action)=>{
      state.value = action.payload;
      state.status = 'complete';
    })
    builder.addCase(asyncIncreamentCount.rejected, (state,action)=>{
      state.status = 'fail';
    })
  }
});

export const getCount = (state) => state.counter.value; //상태
export const getStatus = (state) => state.counter.status;
export const { increament } = counterSlice.actions; //액션 함수

export default counterSlice;
