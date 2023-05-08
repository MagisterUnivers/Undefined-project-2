import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchUserDataThunk = createAsyncThunk(
  '@@auth/fetchUserData',
  async (_, thunkAPI) => {
    try {
      console.log(axios.defaults.headers.common.Authorization);
      const res = await axios.get('user/info');
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
