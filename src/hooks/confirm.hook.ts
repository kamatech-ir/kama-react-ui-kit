import { useAppDispatch, useAppSelector } from './redux.hooks';
import { hideConfirm, showConfirm } from '../redux/slices/confirm.slice';

let resolveCallback: (value: unknown) => void;
function useConfirm() {
  const dispatch = useAppDispatch();
  const confirmState = useAppSelector((state) => {
    return state.confirm;
  });

  const onConfirm = () => {
    closeConfirm();
    resolveCallback(true);
  };
  const onCancel = () => {
    closeConfirm();
    resolveCallback(false);
  };
  const confirm = (message: string) => {
    dispatch(showConfirm(message));
    return new Promise((res) => {
      resolveCallback = res;
    });
  };
  const closeConfirm = () => {
    dispatch(hideConfirm());
  };

  return { confirm, onConfirm, onCancel, confirmState };
}

export default useConfirm;
