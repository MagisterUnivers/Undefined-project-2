import { createSelector } from '@reduxjs/toolkit';

export const selectTodos = state => state.tasks.items;
export const selectLoading = state => state.tasks.loading;
export const selectFilter = state => state.filter;
export const selectUser = state => state.auth.user;
export const selectIsOnline = state => state.auth.online;
export const selectUserLoading = state => state.auth.loading;
export const selectAuthError = state => state.auth.error;
export const selectAuthToken = state => state.auth.data;
export const selectAuthAccessToken = state => state.auth.data.accessToken;
export const selectAuthRefreshToken = state => state.auth.data.refreshToken;
export const selectUserInfo = state => state.userInfo;
export const selectUserInfoEmail = state => state.userInfo.email;
export const selectTheme = state => state.userInfo.theme;

// export const selectUncompletedReselect = createSelector(
//   [state => state.tasks.items],
//   todos => {
//     return todos.reduce(
//       (total, todo) => (todo.completed ? total : total + 1),
//       0
//     );
//   }
// );

// export const selectFilteredDataReselect = createSelector(
//   [selectTodos, selectFilter],
//   (todos, filter) => {
//     switch (filter) {
//       case 'all':
//         return todos;
//       case 'active':
//         return todos.filter(todo => !todo.completed);
//       case 'completed':
//         return todos.filter(todo => todo.completed);
//       default:
//         return todos;
//     }
//   }
// );
