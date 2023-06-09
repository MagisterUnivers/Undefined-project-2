import { parseISO } from 'date-fns';
import { Loading } from 'notiflix/build/notiflix-loading-aio';

// Loading.standard('Loading...', {
//   backgroundColor: 'rgba(0,0,0,0.8)',
//   });

const { createSlice } = require('@reduxjs/toolkit');
const {
  fetchUserDataThunk,
  updateUserDataThunk,
} = require('./userInfoOperations');

const initialState = {
  _id: '',
  name: '',
  email: '',
  birthday: '',
  phone: '',
  skype: '',
  userImgUrl: '',
  theme: 'light',
};

const userSlice = createSlice({
  name: '@@userInfo',
  initialState,
  reducers: {
    setTheme: (state) => {
      // remove current
      document.body.classList.remove('light', 'dark');

      state.theme = state.theme === 'light' ? 'dark' : 'light';

      // add new
      document.body.classList.add(state.theme);
    },
  },
  extraReducers: {
    [fetchUserDataThunk.pending]: (state) => {
      state.loading = true;
      Loading.hourglass('User data is loading...');
    },
    [fetchUserDataThunk.fulfilled]: (state, { payload }) => {
      state._id = payload._id;
      state.name = payload.name;
      state.email = payload.email;
      if (payload.birthday === null) {
        state.birthday = new Date(); // Устанавливаем текущую дату как базовую
      } else {
        state.birthday = parseISO(payload.birthday);
      }
      state.phone = payload.phone;
      state.skype = payload.skype;
      state.userImgUrl = payload.userImgUrl;
      state.loading = false;
      // state.theme = payload.theme;

      document.body.classList.add(state.theme);
      Loading.remove();
    },
    [fetchUserDataThunk.rejected]: (state, { payload }) => {
      state.error = payload;
      state.loading = false;
      state.online = false;
      Loading.remove();
    },
    [updateUserDataThunk.pending]: (state) => {
      state.loading = true;
    },
    [updateUserDataThunk.fulfilled]: (state, { payload }) => {
      state._id = payload._id;
      state.name = payload.name;
      state.email = payload.email;
      state.birthday = parseISO(payload.birthday);
      state.phone = payload.phone;
      state.skype = payload.skype;
      state.userImgUrl = payload.userImgUrl;
      state.loading = false;
    },
    [updateUserDataThunk.rejected]: (state, { payload }) => {
      state.error = payload;
      state.loading = false;
      Loading.remove();
    },
  },
});

export const userInfoReducer = userSlice.reducer;
export const { setTheme } = userSlice.actions;
