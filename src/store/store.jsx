import { configureStore } from '@reduxjs/toolkit';
import singlePayReducer from './singlePaySlice';

const store = configureStore({
  reducer: {
    singlePay: singlePayReducer,
  },
});

export default store;
