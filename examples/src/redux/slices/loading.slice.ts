import { createSlice } from '@reduxjs/toolkit';

type LoadingState = {
  show: boolean;
};

const initialState: LoadingState = {
  show: false,
};

export const loadingSlice = createSlice({
  name: 'loading',
  initialState: initialState,
  reducers: {
    showLoading(state) {
      state.show = true;
    },
    hideLoading(state) {
      state.show = false;
    },
  },
});

export const { showLoading, hideLoading } = loadingSlice.actions;
export default loadingSlice.reducer;
