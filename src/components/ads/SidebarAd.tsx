import React from 'react';
import { AdBoundary } from '../layout/AdBoundary';
import { AdScript } from './AdScript';

export const SidebarAd: React.FC = () => {
  return (
    <AdBoundary>
      <div className="mx-auto w-[300px] h-[250px] flex items-center justify-center">
        <ins
          className="adsbygoogle"
          style={{ display: 'block', width: '300px', height: '250px' }}
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