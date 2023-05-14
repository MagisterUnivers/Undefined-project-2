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
    },
    [getMonthEvents.rejected]: (state) => {
      state.isLoading = false;
    },
    [getMonthEvents.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.monthDatesMap = computeMonthDatesMap(payload);
    },

    /**
     * Reducers for createUserTaskThunk
     */
    [createUserTaskThunk.pending]: (state) => {
      state.isLoading = true;
    },
    [createUserTaskThunk.fulfilled]: (state, { payload }) => {
      // state.tasks.push({
      //   tasks: [payload],
      //   date: `${payload.date}`,
      // });
      const date = payload.date.slice(0, 10);
      state.monthDatesMap = {
        ...state.monthDatesMap,
        [date]: [...state.monthDatesMap[date], payload],
      };
      state.isLoading = false;
    },
    [createUserTaskThunk.rejected]: (state, { payload }) => {
      state.error = payload;
      state.isLoading = false;
    },

    /**
     * Reducers for deleteUserTaskThunk
     */
    [deleteUserTaskThunk.pending]: (state) => {
      state.isLoading = true;
    },
    [deleteUserTaskThunk.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.error = null;

      const date = action.payload.date.slice(0, 10);
      let arrTasks = state.monthDatesMap[date].filter(
        (task) => task._id !== action.payload._id
      );
      state.monthDatesMap = { ...state.monthDatesMap, [date]: arrTasks };
    },
    [deleteUserTaskThunk.rejected]: (state, { payload }) => {
      state.IsLoading = true;
      state.error = payload;
    },

    /**
     * Reducers for updateUserTaskThunk
     */
    [updateUserTaskThunk.pending]: (state, { payload }) => {
      state.IsLoading = true;
    },
    [updateUserTaskThunk.fulfilled](state, { payload }) {
      state.isLoading = false;
      state.error = null;

      const date = payload.date.slice(0, 10);

      let arrTasks = state.monthDatesMap[date].filter((task) => {
        if (task._id === payload._id) return payload;
        else return task;
      });

      state.monthDatesMap = { ...state.monthDatesMap, [date]: arrTasks };
      // let arrTasks = state.tasks.find((item) => item.date === date);
      // console.log(arrTasks);
      // console.log(date);

      // arrTasks.tasks = arrTasks.tasks.map((item) => {
      //   if (item._id === payload._id) return payload;
      //   else return item;
      // });
    },
    [updateUserTaskThunk.rejected]: (state, { payload }) => {
      state.IsLoading = true;
      state.error = payload;
    },

    /**
     * Reducers for getUserTaskThunk
     */
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
