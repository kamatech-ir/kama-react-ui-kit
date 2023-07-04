"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.hideLoading = exports.showLoading = exports.loadingSlice = void 0;
var toolkit_1 = require("@reduxjs/toolkit");
var initialState = {
    show: false,
};
exports.loadingSlice = (0, toolkit_1.createSlice)({
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
exports.showLoading = (_a = exports.loadingSlice.actions, _a.showLoading), exports.hideLoading = _a.hideLoading;
exports.default = exports.loadingSlice.reducer;
