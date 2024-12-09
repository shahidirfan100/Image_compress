import React from 'react';
import { AdBoundary } from '../layout/AdBoundary';
import { AdScript } from './AdScript';

export const HeaderAd: React.FC = () => {
  return (
    <AdBoundary>
      <div className="mx-auto max-w-[728px] h-[90px] flex items-center justify-center">
        <ins
          className="adsbygoogle"
          style={{ display: 'block', width: '728px', height: '90px' }}
          data-ad-client="ca-pub-XXXXXXXXXXXXXXXX"
          data-ad-slot="XXXXXXXXXX"
          data-ad-format="auto"
          data-full-width-responsive="true"
        />
        <AdScript />
      </div>
    </AdBoundary>
  );
};