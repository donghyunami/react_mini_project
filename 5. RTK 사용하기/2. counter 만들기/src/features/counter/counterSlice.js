import { createSlice } from '@reduxjs/toolkit';

export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    count: 0,
  },
  reducers: {
    increment: state => {
      state.count += 1;
    },
    decrement: state => {
      state.count -= 1;
    },
    resetCount: state => {
      state.count = 0;
    },
    incrementByUser: (state, action) => {
      state.count += action.payload;
    },
  },
});

export const { increment, decrement, resetCount, incrementByUser } =
  counterSlice.actions;
export default counterSlice.reducer;
