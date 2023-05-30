declare function useLoading(): {
    loading: {
        show: () => void;
        hide: () => void;
    };
    loadingState: {
        show: boolean;
    };
};
export default useLoading;
