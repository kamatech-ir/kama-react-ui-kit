type LoadingState = {
    show: boolean;
};
export declare const loadingSlice: import("@reduxjs/toolkit").Slice<LoadingState, {
    showLoading(state: import("immer/dist/internal").WritableDraft<LoadingState>): void;
    hideLoading(state: import("immer/dist/internal").WritableDraft<LoadingState>): void;
}, "loading">;
export declare const showLoading: import("@reduxjs/toolkit").ActionCreatorWithoutPayload<"loading/showLoading">, hideLoading: import("@reduxjs/toolkit").ActionCreatorWithoutPayload<"loading/hideLoading">;
declare const _default: import("redux").Reducer<LoadingState>;
export default _default;
