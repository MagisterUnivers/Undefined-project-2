import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import Notiflix from 'notiflix';

//defaultURL
axios.defaults.baseURL = 'https://goose-tracker-backend.p.goit.global/';

// axios.defaults.baseURL = 'https://goit-task-manager.herokuapp.com/';

const setToken = (token) => {
  console.log('SET TOKEN');
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};
const clearToken = () => {
  console.log('CLEAR TOKEN');

  axios.defaults.headers.common.Authorization = ``;
};

export const registrationThunk = createAsyncThunk(
  '@@auth/registration',
  async (credentials) => {
    try {
      console.log(credentials);
      const res = await axios.post('user/register', credentials);
      // setToken(res.data);
      return res.data;
    } catch (error) {
      const errorMessage = error.response.data.message;
      Notiflix.Notify.failure('Respond from server is ' + errorMessage);
      // return thunkAPI.rejectWithValue(error.message);
    }
  }
);
export const loginThunk = createAsyncThunk(
  '@@auth/login',
  async (credentials) => {
    try {
      const res = await axios.post('user/login', credentials);
      setToken(res.data.data.accessToken);
      console.log(res);
      return res.data;
    } catch (error) {
      const errorMessage = error.response.data.message;
      Notiflix.Notify.failure('Respond from server is ' + errorMessage);
      // return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logoutThunk = createAsyncThunk('@@auth/logout', async (_) => {
  try {
    await axios.get('user/logout');
    clearToken();
  } catch (error) {
    const errorMessage = error.response.data.message;
    Notiflix.Notify.failure('Respond from server is ' + errorMessage);
  }
});

export const refreshThunk = createAsyncThunk(
  '@@auth/refresh',
  async (_, thunkAPI) => {
    const savedToken = thunkAPI.getState().auth.data.accessToken;
    if (savedToken === null) {
      return thunkAPI.rejectWithValue('Token is not find');
    }
    try {
      setToken(savedToken);
      const res = await axios.get('/users/current');
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
