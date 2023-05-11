import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const setToken = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const fetchUserDataThunk = createAsyncThunk(
  '@@auth/fetchUserData',
  async (_, thunkAPI) => {
    const savedToken = thunkAPI.getState().auth.data.accessToken;
    try {
      console.log(axios.defaults.headers.common.Authorization);
      setToken(savedToken);

      const res = await axios.get('user/info');
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
export const updateUserDataThunk = createAsyncThunk(
  '@@auth/updateUserData',
  async (credentials, thunkAPI) => {
    try {
      console.log(axios.defaults.headers.common.Authorization);
      const res = await axios.patch('user/update', credentials);
      thunkAPI.dispatch(fetchUserDataThunk());
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);