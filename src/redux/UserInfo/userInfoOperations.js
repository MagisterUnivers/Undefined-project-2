import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const setToken = (token) => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const fetchUserDataThunk = createAsyncThunk(
  '@@auth/fetchUserData',
  async (_, thunkAPI) => {
    const savedToken = thunkAPI.getState().auth.data.accessToken;
    try {
      setToken(savedToken);

      const res = await axios.get('user/info');

      // const parsedData = {
      //   ...res.data,
      //   birthday: format(parseISO(res.data.birthday), 'yyyy-MM-dd'),
      // };
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
      // const formattedCredentials = {
      //   ...credentials,
      //   birthday: parseISO(credentials.birthday),
      // };

      console.log(axios.defaults.headers.common.Authorization);
      const res = await axios.patch('user/update', credentials);
      thunkAPI.dispatch(fetchUserDataThunk());
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
