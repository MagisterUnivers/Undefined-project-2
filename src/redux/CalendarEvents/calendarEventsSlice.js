import { createSlice } from '@reduxjs/toolkit';
import moment from 'moment';
import { shallowCompare } from 'react-global-state-hooks';
import { useSelector } from 'react-redux';

import {
  createUserTaskThunk,
  deleteUserTaskThunk,
  getUserTaskThunk,
  updateUserTaskThunk,
} from './calendarEventsOperations';

const mocks = [
  {
    tasks: [
      {
        _id: '64303c8582dc6fccdee4f8df1',
        title: 'toDo',
        start: '9-00',
        end: '14-00',
        priority: 'hight',
        category: 'to-do',
        owner: '64303c5f82dc6fccdee4f8dc',
        date: '2023-03-17T00:00:00.000Z',
        createdAt: '2023-04-07T15:53:41.088Z',
        updatedAt: '2023-04-07T15:53:41.088Z',
        __v: 0,
      },
    ],
    date: '2023-05-17',
  },
  {
    tasks: [
      {
        _id: '64303c8582dc6fccdee4f8d2',
        title: 'toDo',
        start: '9-00',
        end: '14-00',
        priority: 'low',
        category: 'to-do',
        owner: '64303c5f82dc6fccdee4f8dc',
        date: '2023-03-17T00:00:00.000Z',
        createdAt: '2023-04-07T15:53:41.088Z',
        updatedAt: '2023-04-07T15:53:41.088Z',
        __v: 0,
      },
      {
        _id: '64303c8582dc6fccdee4f8d3',
        title: 'toDo',
        start: '9-00',
        end: '14-00',
        priority: 'medium',
        category: 'to-do',
        owner: '64303c5f82dc6fccdee4f8dc',
        date: '2023-03-17T00:00:00.000Z',
        createdAt: '2023-04-07T15:53:41.088Z',
        updatedAt: '2023-04-07T15:53:41.088Z',
        __v: 0,
      },
    ],
    date: '2023-05-28',
  },
  {
    tasks: [
      {
        _id: '64303c8582d26fccdee4f8d2',
        title: 'toDo',
        start: '9-00',
        end: '14-00',
        priority: 'low',
        category: 'to-do',
        owner: '64303c5f82dc6fccdee4f8dc',
        date: '2023-03-17T00:00:00.000Z',
        createdAt: '2023-04-07T15:53:41.088Z',
        updatedAt: '2023-04-07T15:53:41.088Z',
        __v: 0,
      },
      {
        _id: '64303c1582dc6fccdee4f8d3',
        title:
          'So w also have to have super big titles here to test the ellipsis',
        start: '9-00',
        end: '14-00',
        priority: 'medium',
        category: 'to-do',
        owner: '64303c5f82dc6fccdee4f8dc',
        date: '2023-03-17T00:00:00.000Z',
        createdAt: '2023-04-07T15:53:41.088Z',
        updatedAt: '2023-04-07T15:53:41.088Z',
        __v: 0,
      },
      {
        _id: '62303c1582dc6fccdee4f8d3',
        title: 'toDo 2',
        start: '9-00',
        end: '14-00',
        priority: 'medium',
        category: 'to-do',
        owner: '64303c5f82dc6fccdee4f8dc',
        date: '2023-03-17T00:00:00.000Z',
        createdAt: '2023-04-07T15:53:41.088Z',
        updatedAt: '2023-04-07T15:53:41.088Z',
        __v: 0,
      },
    ],
    date: '2023-05-12',
  },
];

const computeTaskMap = (items) => {
  const datesMap = items.reduce((datesMap, { tasks, date }) => {
    datesMap[date] = tasks;

    return datesMap;
  }, {});

  return datesMap;
};

const initialState = {
  isLoading: false,
  tasks: mocks,
  taskMap: computeTaskMap(mocks),
};

console.log(initialState.taskMap);

const calendarEventsSlice = createSlice({
  name: '@@calendarEvents',
  initialState,
  reducers: {
    addEvent: (state) => {},
    partialUpdate: (state) => {},
    update: (state) => {},
    removeEvent: (state) => {},
  },
  extraReducers: (builder) => {
    builder
      .addCase(createUserTaskThunk.pending, (state) => {
        state.IsLoading = true;
      })
      .addCase(createUserTaskThunk.fulfilled, (state, { payload }) => {
        // state.tasks.title = payload.title;
        // state.tasks.start = payload.start;
        // state.tasks.end = payload.end;
        // // if (payload.birthday === null) {
        // //   state.birthday = new Date(); // Устанавливаем текущую дату как базовую
        // // } else {
        // //   state.birthday = parseISO(payload.birthday);
        // // }
        // state.tasks.priority = payload.priority;
        // state.tasks.date = parseISO(payload.date);
        // state.tasks._id = payload._id;
        state.tasks.push(payload);
        state.IsLoading = false;
      })
      .addCase(createUserTaskThunk.rejected, (state, { payload }) => {
        state.error = payload;
        state.IsLoading = false;
      })
      .addCase(deleteUserTaskThunk.pending, (state) => {
        state.IsLoading = true;
      })
      .addCase(deleteUserTaskThunk.fulfilled, (state, action) => {
        state.IsLoading = false;
        state.error = null;
        const index = state.tasks.findIndex(
          (task) => task.id === action.payload.id
        );
        state.tasks.splice(index, 1);
      })
      .addMatcher(
        (action) => {
          const { type } = action;

          return type.includes('calendar');
        },
        (state, action) => {
          state.taskMap = computeTaskMap(state.tasks);
        }
      );
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
    //   const index = state.tasks.findIndex(
    //     (task) => task.id === action.payload.id
    //   );
    //   state.tasks.splice(index, 1);
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

    //   const index = state.tasks.findIndex(
    //     (task) => task.id === action.payload.id
    //   );
    //   state.tasks.splice(index, 1);
  },
  [getUserTaskThunk.rejected]: (state, { payload }) => {
    state.IsLoading = true;
    state.error = payload;
  },
});

export const useEventTasks = ({ date }) => {
  const date_key = moment(date).format('yyyy-MM-DD');

  return useSelector(({ calendar }) => {
    const tasks = calendar.taskMap[date_key] ?? [];

    return tasks;
  }, shallowCompare);
};

export const calendarEventsReducer = calendarEventsSlice.reducer;
export const { addEvent, partialUpdate, removeEvent, update } =
  calendarEventsSlice.actions;
