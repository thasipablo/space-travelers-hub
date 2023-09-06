import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const API_URI = 'https://api.spacexdata.com/v4/rockets';

const initialState = {
  rockets: [],
  isLoading: true,
  error: '',
};

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
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchRockets.pending, (state) => {
      state.isLoading = true;
      state.error = '';
    });
    builder.addCase(fetchRockets.fulfilled, (state, action) => {
      state.isLoading = false;
      state.rockets = action.payload;
    });
    builder.addCase(fetchRockets.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
    });
  },
});
