import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const counterSlice = createSlice({
  name: 'slice',
  initialState: {
    values: 0,
    users: [],
  },
  reducers: {
    increment: (state, action) => {
      state.values += action.payload;
    },
    decrement: (state, action) => {
      state.values -= action.payload;
    },
    addUser: (state, { payload }) => {
      state.users.push({ ...payload });
    },
    // getUser: (state, action) => {
    //   state.posts = action.payload;
    // },
  },
});

export const { increment, decrement, addUser, getUser } = counterSlice.actions;
export default counterSlice.reducer;
