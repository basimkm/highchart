import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import json from '../jsonServer';
import { useNavigate } from 'react-router-dom';
import {
  addData,
  deleteData,
  getData,
  getDataId,
  updateData,
} from '../Service';

export const addPosts = createAsyncThunk('crud/addPosts', async (val) => {
  const addval = await addData(val);
});
export const getPostss = createAsyncThunk('crud/getPostss', async () => {
  const { data } = await json.get('posts');
  console.log('gg', data);

  return data;
});

export const delPosts = createAsyncThunk('crud/delPosts', async (id) => {
  const { data } = await deleteData(id);
  window.location.reload();
});

export const getId = createAsyncThunk('crud/getId', async (id) => {
  const { data } = await getDataId(id);
  console.log('hi', data);

  return data;
});

export const editPosts = createAsyncThunk('crud/editPosts', async (id, val) => {
  const { data } = await updateData(id, val);
  console.log('edit', data);
  return data;
});

export const crudSlice = createSlice({
  name: 'crud',
  initialState: {
    getDatas: [],
    getAllId: [],
    isLoading: false,
    errorMessage: '',
  },

  extraReducers: (builder) => {
    builder
      .addCase(getPostss.pending, (state, { payload }) => {
        state.isLoading = true;
        console.log('start');
      })
      .addCase(getPostss.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.getDatas = payload;
        console.log('success');
      })
      .addCase(getPostss.rejected, (state, action) => {
        state.isLoading = false;
        state.errorMessage = action.error.message;
        console.log('error');
      })
      .addCase(getId.fulfilled, (state, { payload }) => {
        state.getAllId = payload;
        console.log('success');
      })
      .addCase(getId.rejected, (state, { payload }) => {
        console.log('errors');
      });
  },
});

export default crudSlice.reducer;
