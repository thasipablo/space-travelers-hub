import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const API_MISSION_URL = 'https://api.spacexdata.com/v3/missions';

const initialState = {
  missionItems: [],
  missionsUpdated: [],
  error: undefined,
};

export const fetchMission = createAsyncThunk('missions/fetchMissions', async () => {
  const response = await axios.get(API_MISSION_URL);
  const mappedData = response.data.map((item) => ({
    mission_name: item.mission_name,
    mission_id: item.mission_id,
    description: item.description,
    reserved: false,
  }));
  return mappedData;
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
            reserved: !item.reserved,
          };
        }
        return item;
      });
      state.missionItems = updatedMissionItems;
      
      state.missionsUpdated = updatedMissionItems
      console.log(state.missionsUpdated);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchMission.fulfilled, (state, action) => {
        const dataFromAPI = action.payload;
        state.missionItems = dataFromAPI;
        console.log(state.missionsUpdated);
      })
      .addCase(fetchMission.rejected, (state, action) => {
        state.error = action.error.message;
      });
  },
});

export const { actionMission } = missionsSlice.actions;

export default missionsSlice;
