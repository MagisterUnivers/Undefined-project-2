const { createSlice } = require('@reduxjs/toolkit');
const { fetchUserDataThunk } = require('./userInfoOperations');

const initialState = {
  _id: '',
  name: 'Serhii',
  email: '',
  birthday: null,
  phone: null,
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
  },
});

export const userInfoReducer = userSlice.reducer;
