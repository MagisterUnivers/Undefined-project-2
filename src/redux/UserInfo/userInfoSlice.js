const { createSlice } = require('@reduxjs/toolkit');
const {
  fetchUserDataThunk,
  updateUserDataThunk,
} = require('./userInfoOperations');

const initialState = {
  _id: '',
  name: 'Serhii',
  email: '',
  birthday: '',
  phone: '',
  skype: '',
  userImgUrl:
    'https://lh3.googleusercontent.com/a/AGNmyxajlg1m9Ch9H6GVi0od7Qpi51V85SXWY1KkOIse0w=s360',
};

const userSlice = createSlice({
  name: '@@userInfo',
  initialState,
  extraReducers: {
    [fetchUserDataThunk.pending]: state => {
      state.loading = true;
    },
    [fetchUserDataThunk.fulfilled]: (state, { payload }) => {
      state._id = payload._id;
      state.name = payload.name;
      state.email = payload.email;
      state.birthday = payload.birthday;
      state.phone = payload.phone;
      state.skype = payload.skype;
      // state.userImgUrl = payload.userImgUrl;
      state.loading = false;
    },
    [fetchUserDataThunk.rejected]: (state, { payload }) => {
      state.error = payload;
      state.loading = false;
    },
    [updateUserDataThunk.pending]: state => {
      state.loading = true;
    },
    [updateUserDataThunk.fulfilled]: (state, { payload }) => {
      // payload._id = state._id;
      // payload.name = state.name;
      // payload.email = state.email;
      // payload.birthday = state.birthday;
      // payload.phone = state.phone;
      // payload.skype = state.skype;
      // payload.userImgUrl = state.userImgUrl;
      state._id = payload._id;
      state.name = payload.name;
      state.email = payload.email;
      state.birthday = payload.birthday;
      state.phone = payload.phone;
      state.skype = payload.skype;
      state.userImgUrl = payload.userImgUrl;
      state.loading = false;
    },
    [updateUserDataThunk.rejected]: (state, { payload }) => {
      state.error = payload;
      state.loading = false;
    },
  },
});

export const userInfoReducer = userSlice.reducer;
