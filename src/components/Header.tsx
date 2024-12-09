import React from 'react';
import { ImageDown } from 'lucide-react';

export const Header: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-12 px-4 rounded-lg shadow-lg mb-8">
      <div className="text-center">
        <div className="flex items-center justify-center gap-3 mb-4">
          <ImageDown className="w-10 h-10" />
          <h1 className="text-4xl font-bold">Image Compressor</h1>
        </div>
        <p className="text-blue-100 text-lg max-w-2xl mx-auto">
          Optimize your images while maintaining quality. Perfect for web and mobile applications.
        </p>
      </div>
    </div>
  );
};