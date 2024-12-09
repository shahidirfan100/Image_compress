import React, { useCallback } from 'react';
import { Gauge } from 'lucide-react';
import { getQualityColor } from '../utils/colors';

interface CompressionSliderProps {
  value: number;
  onChange: (value: number) => void;
}

export const CompressionSlider: React.FC<CompressionSliderProps> = ({ value, onChange }) => {
  const percentage = Math.round((1 - value) * 100);
  const colors = getQualityColor(percentage);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = parseFloat(e.target.value);
    onChange(newValue);
  };

  return (
    <div className="w-full bg-white p-6 rounded-lg shadow-sm border border-gray-100">
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center gap-2">
          <Gauge className={colors.text} />
          <label className="text-sm font-medium text-gray-700">
            Compression Level
          </label>
        </div>
        <div className="flex items-center gap-2">
          <div className={`text-lg font-bold ${colors.text}`}>
            {percentage}%
          </div>
          <span className="text-sm text-gray-500">compression</span>
        </div>
      </div>

      <div className="relative">
        <div className="absolute -left-3 -right-3 h-2 bg-gradient-to-r from-green-500 via-yellow-500 to-red-500 rounded-full opacity-20" />
        <input
          type="range"
          min="0.1"
          max="1"
          step="0.01"
          value={value}
          onChange={handleChange}
          className="relative w-full h-2 bg-transparent rounded-lg appearance-none cursor-pointer"
          style={{
            background: `linear-gradient(to right, rgb(${colors.rgb}), transparent)`
          }}
        />
      </div>

      <div className="flex justify-between text-xs mt-2">
        <div className="space-y-1">
          <span className="block text-green-600 font-medium">Best Quality</span>
          <span className="block text-gray-400">Larger file size</span>
        </div>
        <div className="space-y-1 text-right">
          <span className="block text-red-600 font-medium">Maximum Compression</span>
          <span className="block text-gray-400">Smaller file size</span>
        </div>
      </div>

      <div className="mt-4 p-3 bg-gray-50 rounded-lg">
        <div className="grid grid-cols-2 gap-4 text-sm">
          <div>
            <span className="text-gray-500">Quality Level:</span>
            <span className={`ml-2 font-medium ${colors.text}`}>
              {percentage < 20 ? 'Excellent' :
               percentage < 40 ? 'High' :
               percentage < 60 ? 'Medium' :
               percentage < 80 ? 'Low' : 'Very Low'}
            </span>
          </div>
          <div>
            <span className="text-gray-500">Step Size:</span>
            <span className="ml-2 font-medium text-gray-700">1%</span>
          </div>
        </div>
      </div>
    </div>
  );
};