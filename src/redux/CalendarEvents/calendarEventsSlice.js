import { createSlice } from '@reduxjs/toolkit';
import { shallowCompare } from 'react-global-state-hooks';
import { useSelector } from 'react-redux';
import { Loading } from 'notiflix/build/notiflix-loading-aio';

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
  monthDatesMap: {},
};

const computeMonthDatesMap = (items) => {
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
    /**
     * Reducers for getMonthEvents
     */
    [getMonthEvents.pending]: (state) => {
      state.isLoading = true;
      Loading.hourglass('User events is loading...');
    },
    [getMonthEvents.rejected]: (state) => {
      state.isLoading = false;
      Loading.remove();
    },
    [getMonthEvents.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.monthDatesMap = computeMonthDatesMap(payload);
      Loading.remove();
    },

    /**
     * Reducers for createUserTaskThunk
     */
    [createUserTaskThunk.pending]: (state) => {
      state.isLoading = true;
      Loading.hourglass('We are creating the task...');
    },
    [createUserTaskThunk.fulfilled]: (state, { payload }) => {
      // state.tasks.push({
      //   tasks: [payload],
      //   date: `${payload.date}`,
      // });
      const date = payload.date.slice(0, 10);

      if (!state.monthDatesMap[date]) {
        state.monthDatesMap[date] = [];
      }

      state.monthDatesMap = {
        ...state.monthDatesMap,
        [date]: [...state.monthDatesMap[date], payload],
      };
      state.isLoading = false;
      Loading.remove();
    },

    [createUserTaskThunk.rejected]: (state, { payload }) => {
      state.error = payload;
      state.isLoading = false;
      Loading.remove();
    },

    /**
     * Reducers for deleteUserTaskThunk
     */
    [deleteUserTaskThunk.pending]: (state) => {
      state.isLoading = true;
      Loading.arrows('We are deleting the task...');
    },
    [deleteUserTaskThunk.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.error = null;

      const date = action.payload.date.slice(0, 10);
      let arrTasks = state.monthDatesMap[date].filter(
        (task) => task._id !== action.payload._id
      );
      state.monthDatesMap = { ...state.monthDatesMap, [date]: arrTasks };
      Loading.remove();
    },
    [deleteUserTaskThunk.rejected]: (state, { payload }) => {
      state.isLoading = true;
      state.error = payload;
      Loading.remove();
    },

    /**
     * Reducers for updateUserTaskThunk
     */
    [updateUserTaskThunk.pending]: (state, { payload }) => {
      state.isLoading = true;
      Loading.hourglass('User Tasks is updating...');
    },
    [updateUserTaskThunk.fulfilled](state, { payload }) {
      state.isLoading = false;
      state.error = null;

      const date = payload.task.date.slice(0, 10);

      const filteredArr = state.monthDatesMap[date].filter((item) => {
        return item._id !== payload.task._id;
      });

      const resultArray = [...filteredArr, payload.task];

      state.monthDatesMap = { ...state.monthDatesMap, [date]: resultArray };
      Loading.remove();
    },
    [updateUserTaskThunk.rejected]: (state, { payload }) => {
      state.isLoading = true;
      state.error = payload;
      Loading.remove();
    },

    /**
     * Reducers for getUserTaskThunk
     */
    [getUserTaskThunk.pending]: (state, { payload }) => {
      state.isLoading = true;
      Loading.hourglass('Catching user task...');
    },
    [getUserTaskThunk.fulfilled](state, { payload }) {
      state.isLoading = false;
      state.error = null;
      state.tasks.push(payload);
      Loading.remove();
    },
    [getUserTaskThunk.rejected]: (state, { payload }) => {
      state.isLoading = true;
      state.error = payload;
      Loading.remove();
    },
  },
});

export const useDateTasks = (date_key) => {
  const fragmentOfState = useSelector(
    function selectorCallback(rootState) {
      const { calendar } = rootState;

      const tasks = calendar.monthDatesMap[date_key] ?? [];

      return tasks;
    },

    shallowCompare
  );

  return fragmentOfState;
};

export const calendarEventsReducer = calendarEventsSlice.reducer;

export const { addEvent, partialUpdate, removeEvent, update } =
  calendarEventsSlice.actions;
