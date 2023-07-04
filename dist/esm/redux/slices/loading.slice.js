var _a;
import { createSlice } from '@reduxjs/toolkit';
var initialState = {
    show: false,
};
export var loadingSlice = createSlice({
    name: 'loading',
    initialState: initialState,
    reducers: {
        showLoading: function (state) {
            state.show = true;
        },
        hideLoading: function (state) {
            state.show = false;
        },
    },
});
export var showLoading = (_a = loadingSlice.actions, _a.showLoading), hideLoading = _a.hideLoading;
export default loadingSlice.reducer;
