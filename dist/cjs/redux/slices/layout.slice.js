"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setSidebarStatus = exports.layoutSlice = void 0;
var toolkit_1 = require("@reduxjs/toolkit");
var initialState = {
    sidebarStatus: 'expanded',
};
exports.layoutSlice = (0, toolkit_1.createSlice)({
    name: 'layout',
    initialState: initialState,
    reducers: {
        setSidebarStatus: function (state, action) {
            state.sidebarStatus = action.payload;
        },
    },
});
exports.setSidebarStatus = exports.layoutSlice.actions.setSidebarStatus;
exports.default = exports.layoutSlice.reducer;
