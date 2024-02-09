import { createReducer } from "@reduxjs/toolkit";

export const customReduser = createReducer(
  {
    c: 0,
  },
  {
    increment: (state) => {
      state.c += 1;
    },
    IncrementByValue: (state, action) => {
      state.c += action.payload;
    },
    decrementByValue: (state, action) => {
      state.c -= action.payload;
    },
    decrement: (state) => {
      state.c -= 1;
    },
  }
);