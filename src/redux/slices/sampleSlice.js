import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  count: 0,
  srchValue: '',
};

export const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    increment: (state) => {
      state.count += 1;
    },
    decrement: (state) => {
      state.count -= 1;
    },
    searchByValue: (state, action) => {
      state.srchValue = action.payload;
    },
  },
});

export const { increment, decrement, searchByValue } = filterSlice.actions;

export default filterSlice.reducer;
