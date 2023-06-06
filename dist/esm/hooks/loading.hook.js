import { useAppDispatch, useAppSelector } from './redux.hooks';
import { hideLoading, showLoading } from '../redux/slices/loading.slice';
function useLoading() {
    var dispatch = useAppDispatch();
    var loadingState = useAppSelector(function (state) {
        return state.loading;
    });
    var loading = {
        show: function () {
            dispatch(showLoading());
        },
        hide: function () {
            dispatch(hideLoading());
        },
    };
    return { loading: loading, loadingState: loadingState };
}
export default useLoading;
//# sourceMappingURL=loading.hook.js.map