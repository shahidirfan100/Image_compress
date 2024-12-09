import React from 'react';

interface AdBannerProps {
  position: 'top' | 'middle' | 'bottom';
}

export const AdBanner: React.FC<AdBannerProps> = ({ position }) => {
  const styles = {
    top: 'mt-4 mb-8',
    middle: 'my-8',
    bottom: 'mt-8 mb-4'
  };

  React.useEffect(() => {
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (error) {
      console.error('Error loading AdSense:', error);
    }
  }, []);

  return (
    <div className={`w-full ${styles[position]} p-4 bg-gray-50 rounded-lg`}>
      <div className="flex justify-center">
        <ins
          className="adsbygoogle"
          style={{ display: 'block', minHeight: position === 'middle' ? '250px' : '100px' }}
          data-ad-client="ca-pub-XXXXXXXXXXXXXXXX"
          data-ad-slot="XXXXXXXXXX"
          data-ad-format="auto"
          data-full-width-responsive="true"
        />
      </div>
    </div>
  );
};