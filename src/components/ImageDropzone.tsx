import React from 'react';
import { useDropzone } from 'react-dropzone';
import { Upload, Image } from 'lucide-react';

interface ImageDropzoneProps {
  onImageSelect: (file: File) => void;
}

export const ImageDropzone: React.FC<ImageDropzoneProps> = ({ onImageSelect }) => {
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    accept: {
      'image/*': ['.png', '.jpg', '.jpeg', '.webp']
    },
    maxFiles: 1,
    onDrop: files => files[0] && onImageSelect(files[0])
  });

  return (
    <div
      {...getRootProps()}
      className={`
        w-full p-12 border-3 border-dashed rounded-xl cursor-pointer
        transition-all duration-300 ease-in-out
        flex flex-col items-center justify-center gap-6
        ${isDragActive 
          ? 'border-blue-500 bg-blue-50 scale-102' 
          : 'border-gray-300 hover:border-blue-400 hover:bg-gray-50'
        }
      `}
    >
      <input {...getInputProps()} />
      <div className="relative">
        <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-blue-400 rounded-full blur opacity-30"></div>
        <div className="relative bg-white p-4 rounded-full">
          <Upload className="w-12 h-12 text-blue-600" />
        </div>
      </div>
      <div className="text-center space-y-2">
        <p className="text-xl font-medium text-gray-700">
          {isDragActive ? 'Drop your image here' : 'Drag & drop an image here'}
        </p>
        <p className="text-sm text-gray-500">
          or click to select a file
        </p>
        <div className="flex items-center justify-center gap-2 text-xs text-gray-400 mt-4">
          <Image className="w-4 h-4" />
          <span>Supports PNG, JPG, JPEG, WebP</span>
        </div>
      </div>
    </div>
  );
};