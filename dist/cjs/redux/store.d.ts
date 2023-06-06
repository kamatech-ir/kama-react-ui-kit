export declare const store: import("@reduxjs/toolkit/dist/configureStore").ToolkitStore<{
    confirm: {
        show: boolean;
        message: string;
    };
    layout: {
        sidebarStatus: "collapsed" | "expanded";
    };
    loading: {
        show: boolean;
    };
}, import("redux").AnyAction, [import("@reduxjs/toolkit").ThunkMiddleware<{
    confirm: {
        show: boolean;
        message: string;
    };
    layout: {
        sidebarStatus: "collapsed" | "expanded";
    };
    loading: {
        show: boolean;
    };
}, import("redux").AnyAction>]>;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
