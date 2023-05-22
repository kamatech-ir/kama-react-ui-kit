import React from 'react';
import KamaIcon from '../icon/KamaIcon';

type KamaAttachmentProps = {
  file: any;
  displayName?: string;
  fileName?: string;
  onDownload?: (file: any) => void;
  onDelete?: (file: any) => void;
};

function KamaAttachment({
  file,
  displayName = 'name',
  fileName,
  onDownload = () => {
    return false;
  },
  onDelete = () => {
    return false;
  },
}: KamaAttachmentProps) {
  const handleDownload = () => {
    onDownload(file);
  };
  const handleDelete = () => {
    onDelete(file);
  };

  const extension = file.fileName?.split('.')[file.fileName?.split('.').length - 1] || '';

  return (
    <div className='KamaAttachment'>
      <div className='fileName' onClick={handleDownload}>
        {fileName ?? file[displayName] ?? 'فایل'}.{extension}
      </div>
      <div className='action' onClick={handleDelete}>
        <KamaIcon icon='delete' />
      </div>
    </div>
  );
}

export default KamaAttachment;
