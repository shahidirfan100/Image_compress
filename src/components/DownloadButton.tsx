import React from 'react';
import { Download } from 'lucide-react';
import { generateFileName } from '../utils/compression';

interface DownloadButtonProps {
  blob: Blob;
  originalFileName: string;
  compressionLevel: number;
  disabled?: boolean;
}

export const DownloadButton: React.FC<DownloadButtonProps> = ({
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
    <div className="flex gap-2">
      <button
        onClick={() => handleDownload('jpg')}
        disabled={disabled}
        className={`
          flex items-center gap-2 px-4 py-2 rounded-lg
          ${disabled
            ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
            : 'bg-blue-600 text-white hover:bg-blue-700 active:bg-blue-800'}
          transition-colors duration-200
        `}
      >
        <Download className="w-4 h-4" />
        Download as JPG
      </button>
      
      <button
        onClick={() => handleDownload('png')}
        disabled={disabled}
        className={`
          flex items-center gap-2 px-4 py-2 rounded-lg
          ${disabled
            ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
            : 'bg-green-600 text-white hover:bg-green-700 active:bg-green-800'}
          transition-colors duration-200
        `}
      >
        <Download className="w-4 h-4" />
        Download as PNG
      </button>
    </div>
  );
};