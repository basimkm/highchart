import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

// using createAsyncThunk

export const getPosts = createAsyncThunk(
  'fetchdata/getPosts',
  async (arg, { rejectWithValue }) => {
    const data = await axios.get('https://jsonplaceholder.typicode.com/posts/');
    return data;
    // try {
    //   const data = await axios.get(
    //     'https://jsonplaceholder.typicode.com/posts'
    //   );
    //   console.log('data', data);
    //   return data;
    // } catch (error) {
    //   rejectWithValue(error.response.data);
    // }
  }
);

export const fetchData = createSlice({
  name: 'fetchdata',
  initialState: {
    data: {},
    message: '',
  },
  extraReducers: (builder) => {
    builder
      .addCase(getPosts.pending, (state, action) => {
        console.log('start');
      })
      .addCase(getPosts.fulfilled, (state, action) => {
        state.data = action.payload;
        console.log('success');
      })
      .addCase(getPosts.rejected, (state, action) => {
        console.log('error');
      });
  },
});

export default fetchData.reducer;
