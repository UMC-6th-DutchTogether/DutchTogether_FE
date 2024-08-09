import { configureStore } from '@reduxjs/toolkit';
import singlePayReducer from './singlePaySlice';
import multiPayReducer from './multiPaySlice';

const store = configureStore({
  reducer: {
    singlePay: singlePayReducer,
    multiPay: multiPayReducer,
  },
});

export default store;
