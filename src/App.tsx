import React, { useState, useEffect, useCallback } from 'react';
import { Layout } from './components/layout/Layout';
import { SEO } from './components/SEO';
import { HeaderAd } from './components/ads/HeaderAd';
import { SidebarAd } from './components/ads/SidebarAd';
import { ImageDropzone } from './components/ImageDropzone';
import { CompressionSlider } from './components/CompressionSlider';
import { ImageComparison } from './components/ImageComparison';
import { compressImage, debounce } from './utils/compression';
import type { CompressedImage, CompressionOptions } from './types/image';

function App() {
  const [compressedImage, setCompressedImage] = useState<CompressedImage | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [compressionLevel, setCompressionLevel] = useState(0.5);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  
  const options: CompressionOptions = {
    maxSizeMB: compressionLevel,
    maxWidthOrHeight: 1920,
    useWebWorker: true,
    preserveExif: false,
  };

  const handleImageSelect = (file: File) => {
    setSelectedFile(file);
    processImage(file, options);
  };

  const processImage = async (file: File, options: CompressionOptions) => {
    try {
      setIsProcessing(true);
      const originalUrl = URL.createObjectURL(file);
      const compressedBlob = await compressImage(file, options);
      const compressedUrl = URL.createObjectURL(compressedBlob);

      setCompressedImage({
        originalFile: file,
        compressedBlob,
        originalSize: file.size,
        compressedSize: compressedBlob.size,
        originalUrl,
        compressedUrl,
      });
    } catch (error) {
      console.error('Error compressing image:', error);
      alert('Error processing image. Please try again.');
    } finally {
      setIsProcessing(false);
    }
  };

  const debouncedProcessImage = useCallback(
    debounce((file: File, options: CompressionOptions) => {
      processImage(file, options);
    }, 150),
    []
  );

  useEffect(() => {
    if (selectedFile) {
      debouncedProcessImage(selectedFile, options);
    }
  }, [compressionLevel, selectedFile]);

  return (
    <>
      <SEO />
      <Layout>
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-3 space-y-6">
            <HeaderAd />
            <ImageDropzone onImageSelect={handleImageSelect} />
            
            {selectedFile && (
              <CompressionSlider
                value={compressionLevel}
                onChange={setCompressionLevel}
              />
            )}

            {isProcessing && (
              <div className="text-center py-12 bg-white rounded-lg shadow-sm border border-gray-100">
                <div className="relative">
                  <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-blue-400 rounded-full blur opacity-30"></div>
                  <div className="relative animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
                </div>
                <p className="mt-4 text-gray-600">Processing your image...</p>
              </div>
            )}

            {compressedImage && !isProcessing && (
              <ImageComparison
                compressedImage={compressedImage}
                compressionLevel={compressionLevel}
              />
            )}
          </div>

          <div className="lg:col-span-1">
            <div className="sticky top-24">
              <SidebarAd />
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}

export default App;