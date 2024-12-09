import imageCompression from 'browser-image-compression';
import type { CompressionOptions } from '../types/image';

export const formatFileSize = (bytes: number): string => {
  if (bytes === 0) return '0 Bytes';
  const k = 1024;
  const sizes = ['Bytes', 'KB', 'MB', 'GB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return `${parseFloat((bytes / Math.pow(k, i)).toFixed(2))} ${sizes[i]}`;
};

export const compressImage = async (
  file: File,
  options: CompressionOptions
): Promise<Blob> => {
  const optimizedOptions = {
    ...options,
    initialQuality: 1 - options.maxSizeMB, // Convert compression level to quality
    alwaysKeepResolution: true, // Maintain original dimensions
    maxIteration: 10, // Increase iterations for better quality control
    useWebWorker: true, // Always use web worker for better performance
  };

  try {
    return await imageCompression(file, optimizedOptions);
  } catch (error) {
    console.error('Error compressing image:', error);
    throw error;
  }
};

export const estimateQualityLoss = (compressionLevel: number): string => {
  const percentage = (1 - compressionLevel) * 100;
  if (percentage < 20) return 'Minimal';
  if (percentage < 40) return 'Low';
  if (percentage < 60) return 'Moderate';
  if (percentage < 80) return 'High';
  return 'Very High';
};

export const generateFileName = (
  originalName: string,
  compressionLevel: number,
  format: 'jpg' | 'png'
): string => {
  const baseName = originalName.replace(/\.[^/.]+$/, '');
  const compression = Math.round((1 - compressionLevel) * 100);
  return `${baseName}_compressed_${compression}pct.${format}`;
};

export const debounce = <T extends (...args: any[]) => any>(
  func: T,
  wait: number
): ((...args: Parameters<T>) => void) => {
  let timeout: NodeJS.Timeout;
  
  return (...args: Parameters<T>) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
};