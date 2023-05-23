import React from 'react';
type KamaAttachmentProps = {
    file: any;
    displayName?: string;
    fileName?: string;
    onDownload?: (file: any) => void;
    onDelete?: (file: any) => void;
};
declare function KamaAttachment({ file, displayName, fileName, onDownload, onDelete, }: KamaAttachmentProps): React.JSX.Element;
export default KamaAttachment;
