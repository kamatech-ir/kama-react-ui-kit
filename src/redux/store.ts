import { configureStore } from '@reduxjs/toolkit';
import confirmSlice from './slices/confirm.slice';
import layoutSlice from './slices/layout.slice';
import loadingSlice from './slices/loading.slice';

export const store = configureStore({
  reducer: {
    confirm: confirmSlice,
    layout: layoutSlice,
    loading: loadingSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
