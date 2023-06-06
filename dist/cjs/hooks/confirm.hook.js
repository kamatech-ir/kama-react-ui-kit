"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var redux_hooks_1 = require("./redux.hooks");
var confirm_slice_1 = require("../redux/slices/confirm.slice");
var resolveCallback;
function useConfirm() {
    var dispatch = (0, redux_hooks_1.useAppDispatch)();
    var confirmState = (0, redux_hooks_1.useAppSelector)(function (state) {
        return state.confirm;
    });
    var onConfirm = function () {
        closeConfirm();
        resolveCallback(true);
    };
    var onCancel = function () {
        closeConfirm();
        resolveCallback(false);
    };
    var confirm = function (message) {
        dispatch((0, confirm_slice_1.showConfirm)(message));
        return new Promise(function (res) {
            resolveCallback = res;
        });
    };
    var closeConfirm = function () {
        dispatch((0, confirm_slice_1.hideConfirm)());
    };
    return { confirm: confirm, onConfirm: onConfirm, onCancel: onCancel, confirmState: confirmState };
}
exports.default = useConfirm;
//# sourceMappingURL=confirm.hook.js.map