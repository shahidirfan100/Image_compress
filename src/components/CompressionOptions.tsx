import React from 'react';
import type { CompressionOptions } from '../types/image';

interface CompressionOptionsProps {
  options: CompressionOptions;
  onChange: (options: CompressionOptions) => void;
}

export const CompressionOptions: React.FC<CompressionOptionsProps> = ({
  options,
  onChange,
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    onChange({
      ...options,
      [name]: type === 'checkbox' ? checked : Number(value),
    });
  };

  return (
    <div className="w-full space-y-4 p-4 bg-gray-50 rounded-lg">
      <h3 className="text-lg font-semibold mb-4">Compression Settings</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Max Size (MB)
          </label>
          <input
            type="number"
            name="maxSizeMB"
            value={options.maxSizeMB}
            onChange={handleChange}
            min="0.1"
            step="0.1"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Max Width/Height (px)
          </label>
          <input
            type="number"
            name="maxWidthOrHeight"
            value={options.maxWidthOrHeight}
            onChange={handleChange}
            min="100"
            step="100"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          />
        </div>
      </div>

      <div className="flex items-center gap-4">
        <label className="flex items-center gap-2">
          <input
            type="checkbox"
            name="preserveExif"
            checked={options.preserveExif}
            onChange={handleChange}
            className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
          />
          <span className="text-sm text-gray-700">Preserve EXIF data</span>
        </label>

        <label className="flex items-center gap-2">
          <input
            type="checkbox"
            name="useWebWorker"
            checked={options.useWebWorker}
            onChange={handleChange}
            className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
          />
          <span className="text-sm text-gray-700">Use Web Worker</span>
        </label>
      </div>
    </div>
  );
};