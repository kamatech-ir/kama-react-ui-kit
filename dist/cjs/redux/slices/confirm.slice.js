"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.hideConfirm = exports.showConfirm = exports.confirmSlice = void 0;
var toolkit_1 = require("@reduxjs/toolkit");
var initialState = {
    show: false,
    message: '',
};
exports.confirmSlice = (0, toolkit_1.createSlice)({
    name: 'confirm',
    initialState: initialState,
    reducers: {
        showConfirm: function (state, action) {
            state.show = true;
            state.message = action.payload;
        },
        hideConfirm: function (state) {
            state.show = false;
            state.message = '';
        },
    },
});
exports.showConfirm = (_a = exports.confirmSlice.actions, _a.showConfirm), exports.hideConfirm = _a.hideConfirm;
exports.default = exports.confirmSlice.reducer;
//# sourceMappingURL=confirm.slice.js.map