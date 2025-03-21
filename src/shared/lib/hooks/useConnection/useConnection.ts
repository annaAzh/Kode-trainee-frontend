import { useEffect, useState } from 'react';

export const useConnection = () => {
  const currentConnectionStatus = navigator.onLine;

  const [isOnline, setIsOnline] = useState(currentConnectionStatus ? true : false);

  useEffect(() => {
    const handleOnline = () => {
      setIsOnline(true);
    };
    const handleOffline = () => {
      setIsOnline(false);
    };
    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  return isOnline;
};
