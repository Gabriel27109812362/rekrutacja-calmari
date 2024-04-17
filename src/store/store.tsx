import { configureStore } from '@reduxjs/toolkit';
import { profileSlice } from './reducers/profileSlice';

export const store = configureStore({
  reducer: {
    profiles: profileSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
