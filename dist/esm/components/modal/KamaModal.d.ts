import React from 'react';
type KamaModalProps = {
    title?: string;
    subTitle?: string;
    onClose?: any;
    footer?: any;
    bottomSpace?: boolean;
    notice?: boolean;
    setIsModalVisible?: (status: boolean) => void;
    sidebar?: string;
    children: any;
};
declare function KamaModal({ title, subTitle, onClose, footer, bottomSpace, notice, setIsModalVisible, sidebar, children, }: KamaModalProps): React.JSX.Element;
export default KamaModal;
