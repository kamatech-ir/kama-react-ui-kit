import { useAppDispatch, useAppSelector } from './redux.hooks';
import { hideLoading, showLoading } from '../redux/slices/loading.slice';

function useLoading() {
  const dispatch = useAppDispatch();
  const loadingState = useAppSelector((state) => {
    return state.loading;
  });

  const loading = {
    show: () => {
      dispatch(showLoading());
    },
    hide: () => {
      dispatch(hideLoading());
    },
  };

  return { loading, loadingState };
}

export default useLoading;
