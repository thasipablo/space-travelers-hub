import { configureStore } from '@reduxjs/toolkit';
import { rocketsSlice } from './rockets/rocketsSlice';

const store = configureStore({
  reducer: {
    rocket: rocketsSlice.reducer,
  },
});

export default store;
