import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import Notiflix from 'notiflix';
import { loginThunk, refreshThunk } from 'redux/Auth/authOperations';
import { getMonthEvents } from 'redux/CalendarEvents';
import clearConsoleOnError from 'utils/ClearConsole';

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
      clearConsoleOnError();
      thunkAPI.dispatch(getMonthEvents());

      return res.data;
    } catch (error) {
      if (
        error.response.data.message === 'Token is expired' ||
        'Not Authorized'
      ) {
        thunkAPI
          .dispatch(refreshThunk())
          .then(() => thunkAPI.dispatch(loginThunk()));
      }

      const errorMessage = error.response.data.message;
      Notiflix.Notify.failure('Respond from server is ' + errorMessage);
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

      const res = await axios.patch('user/update', credentials);
      thunkAPI.dispatch(fetchUserDataThunk());
      return res.data;
    } catch (error) {
      if (
        error.response.data.message === 'Token is expired' ||
        'Not Authorized'
      ) {
        thunkAPI
          .dispatch(refreshThunk())
          .then(() => thunkAPI.dispatch(loginThunk()));
      }

      const errorMessage = error.response.data.message;
      Notiflix.Notify.failure('Respond from server is ' + errorMessage);
    }
  }
);
