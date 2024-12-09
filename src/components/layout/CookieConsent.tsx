import React from 'react';

export const CookieConsent: React.FC = () => {
  const [accepted, setAccepted] = React.useState(() => {
    return localStorage.getItem('cookieConsent') === 'true';
  });

  if (accepted) return null;

  const handleAccept = () => {
    localStorage.setItem('cookieConsent', 'true');
    setAccepted(true);
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white shadow-lg border-t border-gray-200 p-4 z-50">
      <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-gray-600">
          We use cookies to enhance your experience and analyze our traffic. 
          By continuing to use this website, you consent to our use of cookies.
        </p>
        <button
          onClick={handleAccept}
          className="whitespace-nowrap px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300"
        >
          Accept Cookies
        </button>
      </div>
    </div>
  );
};