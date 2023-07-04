import { configureStore } from '@reduxjs/toolkit';
import layoutSlice from './slices/layout.slice';
import loadingSlice from './slices/loading.slice';
import confirmSlice from './slices/confirm.slice';

export const store = configureStore({
  reducer: {
    layout: layoutSlice,
    loading: loadingSlice,
    confirm: confirmSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
