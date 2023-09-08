import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const API_MISSION_URL = 'https://api.spacexdata.com/v3/missions';

const initialState = {
  missionItems: [],
  error: undefined,
};

export const fetchMission = createAsyncThunk('missions/fetchMissions', async () => {
  try {
    const response = await fetch(API_MISSION_URL);

    if (!response.ok) {
      throw new Error('La solicitud no pudo completarse.');
    }

    const data = await response.json();
    const mappedData = data.map((item) => ({
      mission_name: item.mission_name,
      mission_id: item.mission_id,
      description: item.description,
      reserved: false,
    }));

    return mappedData;
  } catch (error) {
    throw new Error(`Hubo un error al obtener los datos de la misión: ${error.message}`);
  }
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
