import { createSlice } from '@reduxjs/toolkit';

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
};

const calendarEventsSlice = createSlice({
  name: '@@calendarEvents',
  initialState,
  reducers: {
    addEvent: (state) => {},
    partialUpdate: (state) => {},
    update: (state) => {},
    removeEvent: (state) => {},
  },
});

export const calendarEventsReducer = calendarEventsSlice.reducer;
export const { addEvent, partialUpdate, removeEvent, update } =
  calendarEventsSlice.actions;
