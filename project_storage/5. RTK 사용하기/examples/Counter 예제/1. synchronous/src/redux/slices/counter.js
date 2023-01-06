import { createSlice } from "@reduxjs/toolkit";
// https://api.countapi.xyz/hit/opesaljkdfslkjfsadf.com/visits

const initialState = {
  value: 0,
  status: "Welcome",
};

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state, action) => {
      console.log({ state: state.value, payload: action });
      state.value = state.value + action.payload;
    },
  },
});

export const getCount = (state) => state.counter.value; //상태
export const { increment } = counterSlice.actions; //액션 함수

export default counterSlice;
