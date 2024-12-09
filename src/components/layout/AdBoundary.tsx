import React from 'react';

interface AdBoundaryProps {
  children: React.ReactNode;
  label?: boolean;
}

export const AdBoundary: React.FC<AdBoundaryProps> = ({ children, label = true }) => {
  return (
    <div className="ad-container relative my-6">
      {label && (
        <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gray-100 px-2 py-0.5 text-xs text-gray-500 rounded">
          Advertisement
        </span>
      )}
      <div className="relative bg-gray-50 rounded-lg overflow-hidden transition-all duration-300 ease-in-out">
        {children}
      </div>
    </div>
  );
};