import { createSlice } from '@reduxjs/toolkit';

type SidebarState = 'collapsed' | 'expanded';
type LayoutState = {
  sidebarStatus: SidebarState;
};

const initialState: LayoutState = {
  sidebarStatus: 'expanded',
};

export const layoutSlice = createSlice({
  name: 'layout',
  initialState,
  reducers: {},
});

// export const {} = layoutSlice.actions;
export default layoutSlice.reducer;
