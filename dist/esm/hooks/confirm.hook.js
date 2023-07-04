import { useAppDispatch, useAppSelector } from './redux.hooks';
import { hideConfirm, showConfirm } from '../redux/slices/confirm.slice';
var resolveCallback;
function useConfirm() {
    var dispatch = useAppDispatch();
    var confirmState = useAppSelector(function (state) {
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
        dispatch(showConfirm(message));
        return new Promise(function (res) {
            resolveCallback = res;
        });
    };
    var closeConfirm = function () {
        dispatch(hideConfirm());
    };
    return { confirm: confirm, onConfirm: onConfirm, onCancel: onCancel, confirmState: confirmState };
}
export default useConfirm;
