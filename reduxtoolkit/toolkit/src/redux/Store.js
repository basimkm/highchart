import { configureStore } from '@reduxjs/toolkit';
import counterReducers from './Counter';
import fetchReducer from './Api';

export default configureStore({
  reducer: {
    counter: counterReducers,
    fetchReducer,
  },
});
