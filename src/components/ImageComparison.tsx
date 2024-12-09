import React from 'react';
import type { CompressedImage } from '../types/image';
import { formatFileSize } from '../utils/compression';
import { ArrowRight } from 'lucide-react';
import { DownloadButtonGroup } from './buttons/DownloadButtonGroup';
import { QualityIndicator } from './QualityIndicator';

interface ImageComparisonProps {
  compressedImage: CompressedImage;
  compressionLevel: number;
}

export const ImageComparison: React.FC<ImageComparisonProps> = ({
  compressedImage,
  compressionLevel,
}) => {
  const {
    originalFile,
    originalUrl,
    compressedUrl,
    originalSize,
    compressedSize,
    compressedBlob,
  } = compressedImage;

  const savings = ((originalSize - compressedSize) / originalSize * 100).toFixed(1);

  return (
    <div className="w-full flex flex-col gap-6 bg-white p-6 rounded-lg shadow-sm border border-gray-100">
      <div className="flex flex-col sm:flex-row gap-6">
        <div className="flex flex-wrap items-center gap-4 flex-1">
          <div className="bg-gray-50 px-6 py-3 rounded-lg">
            <p className="text-sm text-gray-600">Original Size</p>
            <p className="text-xl font-semibold text-gray-900">{formatFileSize(originalSize)}</p>
          </div>
          <ArrowRight className="text-blue-600 hidden sm:block" />
          <div className="bg-blue-50 px-6 py-3 rounded-lg">
            <p className="text-sm text-gray-600">Compressed Size</p>
            <p className="text-xl font-semibold text-blue-600">{formatFileSize(compressedSize)}</p>
          </div>
          <div className="bg-green-50 px-6 py-3 rounded-lg">
            <p className="text-sm text-gray-600">Savings</p>
            <p className="text-xl font-semibold text-green-600">{savings}%</p>
          </div>
        </div>
        
        <div className="flex flex-col gap-3">
          <QualityIndicator compressionLevel={compressionLevel} />
          <DownloadButtonGroup
            blob={compressedBlob}
            originalFileName={originalFile.name}
            compressionLevel={compressionLevel}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-3">
          <h3 className="text-lg font-semibold flex items-center gap-2">
            Original Image
          </h3>
          <div className="aspect-video bg-gray-50 rounded-lg overflow-hidden border border-gray-200">
            <img
              src={originalUrl}
              alt="Original"
              className="w-full h-full object-contain"
            />
          </div>
        </div>
        
        <div className="space-y-3">
          <h3 className="text-lg font-semibold flex items-center gap-2">
            Compressed Result
          </h3>
          <div className="aspect-video bg-gray-50 rounded-lg overflow-hidden border border-gray-200">
            <img
              src={compressedUrl}
              alt="Compressed"
              className="w-full h-full object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
};