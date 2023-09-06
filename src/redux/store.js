import { configureStore } from '@reduxjs/toolkit';
import { rocketsSlice } from './rockets/rocketsSlice';
import missionsSlice from './missions/missionsSlice';

const store = configureStore({
  reducer: {
    rockets: rocketsSlice.reducer,
    mission: missionsSlice.reducer,
  },
});

export default store;
