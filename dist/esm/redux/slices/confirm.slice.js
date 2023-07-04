var _a;
import { createSlice } from '@reduxjs/toolkit';
var initialState = {
    show: false,
    message: '',
};
export var confirmSlice = createSlice({
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
export var showConfirm = (_a = confirmSlice.actions, _a.showConfirm), hideConfirm = _a.hideConfirm;
export default confirmSlice.reducer;
