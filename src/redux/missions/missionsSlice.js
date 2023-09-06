import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const API_MISSION_URL = 'https://api.spacexdata.com/v3/missions';

const initialState = {
  missionItems: [],
  loading: true,
  error: undefined,
};

export const fetchMission = createAsyncThunk('missions/fetchMissions', async () => {
  const response = await axios.get(API_MISSION_URL);
  return response.data;
});

const missionsSlice = createSlice({
  name: 'mission',
  initialState,
  reducers: {
    addMission: (state, action) => {
      console.log(action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchMission.pending, (state) => {
        state.loading = true;
        state.error = undefined;
      })
      .addCase(fetchMission.fulfilled, (state, action) => {
        const dataFromAPI = action.payload;
        state.missionItems = dataFromAPI;
      })
      .addCase(fetchMission.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const { addMission } = missionsSlice.actions;

export default missionsSlice;
