import React from 'react';
import { AlertCircle } from 'lucide-react';
import { estimateQualityLoss } from '../utils/compression';

interface QualityIndicatorProps {
  compressionLevel: number;
}

export const QualityIndicator: React.FC<QualityIndicatorProps> = ({ compressionLevel }) => {
  const qualityLoss = estimateQualityLoss(compressionLevel);
  
  const getColorClass = () => {
    switch (qualityLoss) {
      case 'Minimal': return 'text-green-600 bg-green-50';
      case 'Low': return 'text-blue-600 bg-blue-50';
      case 'Moderate': return 'text-yellow-600 bg-yellow-50';
      case 'High': return 'text-orange-600 bg-orange-50';
      default: return 'text-red-600 bg-red-50';
    }
  };

  return (
    <div className={`flex items-center gap-2 px-4 py-2 rounded-lg ${getColorClass()}`}>
      <AlertCircle className="w-4 h-4" />
      <span className="text-sm font-medium">
        Quality Loss: {qualityLoss}
      </span>
    </div>
  );
};