import { createSlice } from '@reduxjs/toolkit';
var initialState = {
    sidebarStatus: 'expanded',
};
export var layoutSlice = createSlice({
    name: 'layout',
    initialState: initialState,
    reducers: {
        setSidebarStatus: function (state, action) {
            state.sidebarStatus = action.payload;
        },
    },
});
export var setSidebarStatus = layoutSlice.actions.setSidebarStatus;
export default layoutSlice.reducer;
//# sourceMappingURL=layout.slice.js.map