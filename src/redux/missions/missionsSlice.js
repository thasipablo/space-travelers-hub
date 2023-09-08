import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const API_MISSION_URL = 'https://api.spacexdata.com/v3/missions';

const initialState = {
  missionItems: [],
  error: undefined,
};

export const fetchMission = createAsyncThunk('missions/fetchMissions', async () => {
  const response = await axios.get(API_MISSION_URL);
  return response.data
});

const missionsSlice = createSlice({
  name: 'mission',
  initialState,
  reducers: {
    actionMission: (state, action) => {
      const ID = action.payload;
      const updatedMissionItems = state.missionItems.map((item) => {
        if (item.mission_id === ID) {
          return {
            ...item,
            reserved: item.reserved ? !item.reserved : true,
          };
        }
        return item;
      });
      return {...state, missionItems: updatedMissionItems};
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchMission.fulfilled, (state, action) => {
        const dataFromAPI = action.payload;
        state.missionItems = dataFromAPI;
      })
      .addCase(fetchMission.rejected, (state, action) => {
        state.error = action.error.message;
      });
  },
});

export const { actionMission } = missionsSlice.actions;

export default missionsSlice;
