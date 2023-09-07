import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const API_MISSION_URL = 'https://api.spacexdata.com/v3/missions';

const initialState = {
  missionItems: [],
  error: undefined,
};

export const fetchMission = createAsyncThunk('missions/fetchMissions', async () => {
  const response = await axios.get(API_MISSION_URL);
  return response.data.map((item) => ({
    mission_name: item.mission_name,
    mission_id: item.mission_id,
    description: item.description,
    reserved: false,
  }));
});

const missionsSlice = createSlice({
  name: 'mission',
  initialState,
  reducers: {
    actionMission: (state, action) => {
      const ID = action.payload;
      state.missionItems.map((item) => {
        if (item.mission_id === ID) {
          item.reserved = !item.reserved;
        }
      });
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

export const { actionMission } = missionsSlice.actions;

export default missionsSlice;
