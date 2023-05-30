export declare const store: import("@reduxjs/toolkit/dist/configureStore").ToolkitStore<{
    loading: {
        show: boolean;
    };
}, import("redux").AnyAction, [import("@reduxjs/toolkit").ThunkMiddleware<{
    loading: {
        show: boolean;
    };
}, import("redux").AnyAction>]>;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
