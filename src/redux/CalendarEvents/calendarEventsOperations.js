import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const getMonthEvents = createAsyncThunk(
  '@@calendarEvents/loadMothEvents',
  async (credentials) => {
    try {
      const res = await axios.post('user/register', credentials);
      // setToken(res.data);
      return res.data;
    } catch (error) {
      const errorMessage = error.response.data.message;
    }
  }
);
