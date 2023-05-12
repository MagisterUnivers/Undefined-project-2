import { configureStore } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { authReducer } from './Auth/authSlice';
import { userInfoReducer } from './UserInfo/userInfoSlice';

const persistConfig = {
  key: 'data',
  version: 1,
  storage,
  whitelist: ['data', 'userInfo', 'user', 'online'],
};

const persistConfigForTheme = {
  key: 'theme',
  version: 1,
  storage,
  whitelist: ['theme'],
};
export const store = configureStore({
  reducer: {
    auth: persistReducer(persistConfig, authReducer),
    userInfo: persistReducer(persistConfigForTheme, userInfoReducer),
    // userInfo: userInfoReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
  // devTools: process.env.NODE_ENV !== 'production',
});
export const persistor = persistStore(store);
