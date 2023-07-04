import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type ConfirmState = {
  show: boolean;
  message: string;
};

const initialState: ConfirmState = {
  show: false,
  message: '',
};

export const confirmSlice = createSlice({
  name: 'confirm',
  initialState: initialState,
  reducers: {
    showConfirm(state, action: PayloadAction<string>) {
      state.show = true;
      state.message = action.payload;
    },
    hideConfirm(state) {
      state.show = false;
      state.message = '';
    },
  },
});

export const { showConfirm, hideConfirm } = confirmSlice.actions;
export default confirmSlice.reducer;
