import { configureStore } from '@reduxjs/toolkit';
import confirmSlice from './slices/confirm.slice';
import layoutSlice from './slices/layout.slice';
import loadingSlice from './slices/loading.slice';
export var store = configureStore({
    reducer: {
        confirm: confirmSlice,
        layout: layoutSlice,
        loading: loadingSlice,
    },
});
//# sourceMappingURL=store.js.map