export interface CompressedImage {
  originalFile: File;
  compressedBlob: Blob;
  originalSize: number;
  compressedSize: number;
  originalUrl: string;
  compressedUrl: string;
}

export interface CompressionOptions {
  maxSizeMB: number;
  maxWidthOrHeight: number;
  useWebWorker: boolean;
  preserveExif: boolean;
}