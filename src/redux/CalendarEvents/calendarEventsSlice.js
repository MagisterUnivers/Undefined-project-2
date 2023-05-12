import { createSlice } from '@reduxjs/toolkit';
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
        priority: 'medium',
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
        priority: 'medium',
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
];

const initialState = {
  events: mocks,
  isLoading: false,
  tasks: [],
};
//   title: '',
//   start: '',
//   end: '',
//   priority: '',
//   category: '',
//   date: '2023-03-17',
// };

const calendarEventsSlice = createSlice({
  name: '@@calendarEvents',
  initialState,
  reducers: {
    addEvent: (state) => {},
    partialUpdate: (state) => {},
    update: (state) => {},
    removeEvent: (state) => {},
  },
  extraReducers: {
    [createUserTaskThunk.pending]: (state) => {
      state.IsLoading = true;
    },
    [createUserTaskThunk.fulfilled]: (state, { payload }) => {
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
    },
    [createUserTaskThunk.rejected]: (state, { payload }) => {
      state.error = payload;
      state.IsLoading = false;
    },
    [deleteUserTaskThunk.pending]: (state, { payload }) => {
      state.IsLoading = true;
    },
    [deleteUserTaskThunk.fulfilled](state, action) {
      state.IsLoading = false;
      state.error = null;
      const index = state.tasks.findIndex(
        (task) => task.id === action.payload.id
      );
      state.tasks.splice(index, 1);
    },
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

export const calendarEventsReducer = calendarEventsSlice.reducer;
export const { addEvent, partialUpdate, removeEvent, update } =
  calendarEventsSlice.actions;
