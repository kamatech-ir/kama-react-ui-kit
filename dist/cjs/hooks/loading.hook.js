"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var redux_hooks_1 = require("./redux.hooks");
var loading_slice_1 = require("../redux/slices/loading.slice");
function useLoading() {
    var dispatch = (0, redux_hooks_1.useAppDispatch)();
    var loadingState = (0, redux_hooks_1.useAppSelector)(function (state) {
        return state.loading;
    });
    var loading = {
        show: function () {
            dispatch((0, loading_slice_1.showLoading)());
        },
        hide: function () {
            dispatch((0, loading_slice_1.hideLoading)());
        },
    };
    return { loading: loading, loadingState: loadingState };
}
exports.default = useLoading;
//# sourceMappingURL=loading.hook.js.map