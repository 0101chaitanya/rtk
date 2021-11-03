import { createSlice } from "@reduxjs/toolkit";

export const counterSilce = createSlice({
  name: "counter",
  initialState: {
    count: 0
  },
  reducers: {
    increment: (state) => {
      state.count += 1;
    },
    decrement: (state) => {
      state.count -= 1;
    },
    incrementByAmout: (state, action) => {
      state.count += action.payload;
    }
  }
});

export const { increment, decrement, incrementByAmout } = counterSilce.actions;

export default counterSilce.reducer;
