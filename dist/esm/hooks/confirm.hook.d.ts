declare function useConfirm(): {
    confirm: (message: string) => Promise<unknown>;
    onConfirm: () => void;
    onCancel: () => void;
    confirmState: {
        show: boolean;
        message: string;
    };
};
export default useConfirm;
