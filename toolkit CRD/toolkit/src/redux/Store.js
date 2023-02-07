import { configureStore } from '@reduxjs/toolkit';
import counterReducers from './Counter';
import fetchReducer from './Api';
import crudReducer from './Crud';

export default configureStore({
  reducer: {
    counter: counterReducers,
    fetchReducer,
    crud: crudReducer,
  },
});
