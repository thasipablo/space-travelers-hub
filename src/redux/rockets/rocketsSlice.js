import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const API_URI = 'https://api.spacexdata.com/v4/rockets';

export const fetchRockets = createAsyncThunk(
  'rockets/fetchRockets',
  async (thunkAPI) => {
    try {
      const response = await axios(API_URI);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        'An error ocurred while trying to fetch rockets',
      );
    }
  },
);

export const rocketsSlice = createSlice({
  name: 'rockets',
  initialState: [],
  reducers: {
    bookRocket: (state, action) => {
      const newState = state.map((rocket) => {
        if (rocket.id !== action.payload) return rocket;
        return { ...rocket, reserved: true };
      });
      console.log(newState);
      return newState;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchRockets.fulfilled, (state, action) => {
      return action.payload;
    });
  },
});

export const { bookRocket } = rocketsSlice.actions;
