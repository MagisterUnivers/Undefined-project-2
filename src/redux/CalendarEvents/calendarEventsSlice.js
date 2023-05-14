import { createSlice } from '@reduxjs/toolkit';
import { shallowCompare } from 'react-global-state-hooks';
import { useSelector } from 'react-redux';

import {
  createUserTaskThunk,
  deleteUserTaskThunk,
  getUserTaskThunk,
  updateUserTaskThunk,
  getMonthEvents,
} from './calendarEventsOperations';

import { createGlobalStateWithDecoupledFuncs } from 'react-global-state-hooks';

export const [useCurrentDate, getCurrentDate, setCurrentDate] =
  createGlobalStateWithDecoupledFuncs(null); // type: CalendarDate

export const [useCurrentMonth, getCurrentMonth, setCurrentMonth] =
  createGlobalStateWithDecoupledFuncs(null); // type: { year: number, month: number }

const initialState = {
  isLoading: false,
  taskMap: {},
};

const computeTaskMap = (items) => {
  const datesMap = items.reduce((datesMap, { tasks, date }) => {
    datesMap[date] = tasks;

    return datesMap;
  }, {});

  return datesMap;
};

const calendarEventsSlice = createSlice({
  name: '@@calendarEvents',
  initialState,
  reducers: {},
  extraReducers: {
    [getMonthEvents.pending]: (state) => {
      state.isLoading = true;
    },
    [getMonthEvents.rejected]: (state) => {
      state.isLoading = false;
    },
    [getMonthEvents.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.taskMap = computeTaskMap(payload);
    },

    // Handle createUserTaskThunk.pending
    [createUserTaskThunk.pending]: (state) => {
      state.isLoading = true;
    },
    // Handle createUserTaskThunk.fulfilled
    [createUserTaskThunk.fulfilled]: (state, { payload }) => {
      state.tasks.push(payload);
      state.isLoading = false;
    },
    // Handle createUserTaskThunk.rejected
    [createUserTaskThunk.rejected]: (state, { payload }) => {
      state.error = payload;
      state.isLoading = false;
    },
    // Handle deleteUserTaskThunk.pending
    [deleteUserTaskThunk.pending]: (state) => {
      state.isLoading = true;
    },
    // Handle deleteUserTaskThunk.fulfilled
    [deleteUserTaskThunk.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.error = null;
    },

    [deleteUserTaskThunk.rejected]: (state, { payload }) => {
      state.IsLoading = true;
      state.error = payload;
    },

    [updateUserTaskThunk.pending]: (state, { payload }) => {
      state.IsLoading = true;
    },

    [updateUserTaskThunk.fulfilled](state, { payload }) {
      state.IsLoading = false;
      state.error = null;
    },

    [updateUserTaskThunk.rejected]: (state, { payload }) => {
      state.IsLoading = true;
      state.error = payload;
    },

    [getUserTaskThunk.pending]: (state, { payload }) => {
      state.IsLoading = true;
    },

    [getUserTaskThunk.fulfilled](state, { payload }) {
      state.IsLoading = false;
      state.error = null;
      state.tasks.push(payload);
    },
    [getUserTaskThunk.rejected]: (state, { payload }) => {
      state.IsLoading = true;
      state.error = payload;
    },
  },
});

export const useDateTasks = (date_key) => {
  const fragmentOfState = useSelector(
    function selectorCallback(rootState) {
      const { calendar } = rootState;

      const tasks = calendar.taskMap[date_key] ?? [];

      return tasks;
    },

    shallowCompare
  );

  return fragmentOfState;
};

export const calendarEventsReducer = calendarEventsSlice.reducer;

export const { addEvent, partialUpdate, removeEvent, update } =
  calendarEventsSlice.actions;
