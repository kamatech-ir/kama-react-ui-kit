import { PayloadAction } from '@reduxjs/toolkit';
type ConfirmState = {
    show: boolean;
    message: string;
};
export declare const confirmSlice: import("@reduxjs/toolkit").Slice<ConfirmState, {
    showConfirm(state: import("immer/dist/internal").WritableDraft<ConfirmState>, action: PayloadAction<string>): void;
    hideConfirm(state: import("immer/dist/internal").WritableDraft<ConfirmState>): void;
}, "confirm">;
export declare const showConfirm: import("@reduxjs/toolkit").ActionCreatorWithPayload<string, "confirm/showConfirm">, hideConfirm: import("@reduxjs/toolkit").ActionCreatorWithoutPayload<"confirm/hideConfirm">;
declare const _default: import("redux").Reducer<ConfirmState>;
export default _default;
