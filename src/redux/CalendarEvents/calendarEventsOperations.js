import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { getCurrentMonth } from './calendarEventsSlice';

const setToken = (token) => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const getMonthEvents = createAsyncThunk(
  '@@calendarEvents/loadMothEvents',
  async (_, thunkAPI) => {
    try {
      const { year, month } = getCurrentMonth();

      const res = await axios.get(`/task/by-month?year=${year}&month=${month}`);

      return res.data;
    } catch (e) {
      // const errorMessage = error.response.data.message;
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const getUserTaskThunk = createAsyncThunk(
  '@@calendarEvents/getUserTask',
  async ({ year, month, authToken }, thunkAPI) => {
    const headers = {
      Authorization: `Bearer ${authToken}`,
    };

    // const savedToken = thunkAPI.getState().auth.data.accessToken;
    try {
      const res = await axios.get('task/by-month', {
        params: {
          year,
          month,
        },
        headers: headers,
      });
      // setToken(res.data);
      return res.data;
    } catch (e) {
      // const errorMessage = error.response.data.message;
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const createUserTaskThunk = createAsyncThunk(
  '@@calendarEvents/createUserTask',
  async (credentials, thunkAPI) => {
    const savedToken = thunkAPI.getState().auth.data.accessToken;
    try {
      setToken(savedToken);
      const res = await axios.post('task', credentials);
      console.log(axios.defaults.headers.common.Authorization);
      console.log(res.data);
      return res.data;
    } catch (e) {
      // const errorMessage = error.response.data.message;
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const deleteUserTaskThunk = createAsyncThunk(
  '@@calendarEvents/deleteUserTask',
  async (taskId, thunkAPI) => {
    try {
      const response = await axios.delete(`task/${taskId}`);
      // thunkAPI.dispatch(fetchContacts());
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const updateUserTaskThunk = createAsyncThunk(
  '@@calendarEvents/updateUserTask',
  async (data, thunkAPI) => {
    const { credentials, id } = data;

    try {
      const response = await axios.put(`task/${id}`, credentials);
      // thunkAPI.dispatch(fetchContacts());
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

/**
  |============================
  | UpdateFetch == PUT
  |============================
*/

// {
//   "title": "toDo",
//   "start": "9-00",
//   "end": "14-00",
//   "priority": "low",
//   "category": "to-do",
//   "date": "2023-03-17"
// }
