import { configureStore } from '@reduxjs/toolkit';
import missionsSlice from './missions/missionsSlice';

const store = configureStore({
  reducer: {
    mission: missionsSlice.reducer,
  },
});

export default store;
