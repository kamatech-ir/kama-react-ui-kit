import { configureStore } from '@reduxjs/toolkit';
import loadingSlice from './slices/loading.slice';
export var store = configureStore({
    reducer: {
        loading: loadingSlice,
    },
});
//# sourceMappingURL=store.js.map