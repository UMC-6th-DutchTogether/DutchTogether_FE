import { configureStore } from '@reduxjs/toolkit';
import singlePayReducer from './singlePaySlice';
import multiPayReducer from './multiPaySlice';
import multiLinkReducer from './multiLinkSlice';

const store = configureStore({
  reducer: {
    singlePay: singlePayReducer,
    multiPay: multiPayReducer,
    multiLink: multiLinkReducer,
  },
});

export default store;
