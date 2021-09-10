import { FC, useEffect, useState } from 'react';
import { useRouter } from 'next/router';

import { LOCAL_STORAGE_REFRESH_TOKEN_KEY } from '@/constants';

const withPublicRoute = (WrappedComponent: FC) => {
  return () => {
    const [mounted, setMounted] = useState(false);
    const router = useRouter();

    // Set mounted status when window loaded
    useEffect(() => {
      setMounted(true);
    }, []);

    if (mounted) {
      if (typeof window !== 'undefined') {
        const refreshToken = localStorage[LOCAL_STORAGE_REFRESH_TOKEN_KEY];

        // Redirect back if try to access login/register page while logged in
        if (
          (refreshToken && router.pathname.indexOf('login') !== -1) ||
          (refreshToken && router.pathname.indexOf('register') !== -1)
        ) {
          router.back();

          return <div>Loading...</div>;
        }
      }

      return <WrappedComponent />;
    }

    return null;
  };
};

export default withPublicRoute;
