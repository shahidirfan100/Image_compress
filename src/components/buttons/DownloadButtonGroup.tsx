import React from 'react';
import { Download } from 'lucide-react';
import { ButtonBase } from './ButtonBase';
import { generateFileName } from '../../utils/compression';

interface DownloadButtonGroupProps {
  blob: Blob;
  originalFileName: string;
  compressionLevel: number;
  disabled?: boolean;
}

export const DownloadButtonGroup: React.FC<DownloadButtonGroupProps> = ({
  blob,
  originalFileName,
  compressionLevel,
  disabled = false,
}) => {
  const handleDownload = async (format: 'jpg' | 'png') => {
    const fileName = generateFileName(originalFileName, compressionLevel, format);
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="flex flex-col sm:flex-row gap-3">
      <ButtonBase
        onClick={() => handleDownload('jpg')}
        disabled={disabled}
        variant="primary"
        className="flex-1"
      >
        <Download className="w-4 h-4" />
        <span className="hidden xs:inline">Download as</span> JPG
      </ButtonBase>
      
      <ButtonBase
        onClick={() => handleDownload('png')}
        disabled={disabled}
        variant="secondary"
        className="flex-1"
      >
        <Download className="w-4 h-4" />
        <span className="hidden xs:inline">Download as</span> PNG
      </ButtonBase>
    </div>
  );
};