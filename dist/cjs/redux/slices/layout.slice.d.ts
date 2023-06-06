import { PayloadAction } from '@reduxjs/toolkit';
type SidebarStatus = 'collapsed' | 'expanded';
type LayoutState = {
    sidebarStatus: SidebarStatus;
};
export declare const layoutSlice: import("@reduxjs/toolkit").Slice<LayoutState, {
    setSidebarStatus(state: import("immer/dist/internal").WritableDraft<LayoutState>, action: PayloadAction<SidebarStatus>): void;
}, "layout">;
export declare const setSidebarStatus: import("@reduxjs/toolkit").ActionCreatorWithPayload<SidebarStatus, "layout/setSidebarStatus">;
declare const _default: import("redux").Reducer<LayoutState>;
export default _default;
