import { PayloadAction, createSlice } from '@reduxjs/toolkit';

type SidebarStatus = 'collapsed' | 'expanded';
type LayoutState = {
  sidebarStatus: SidebarStatus;
};

const initialState: LayoutState = {
  sidebarStatus: 'expanded',
};

export const layoutSlice = createSlice({
  name: 'layout',
  initialState: initialState,
  reducers: {
    setSidebarStatus(state, action: PayloadAction<SidebarStatus>) {
      state.sidebarStatus = action.payload;
    },
  },
});

export const { setSidebarStatus } = layoutSlice.actions;
export default layoutSlice.reducer;
