import { FC, useEffect, useState } from 'react';
import { useRouter } from 'next/router';

import { LOCAL_STORAGE_REFRESH_TOKEN_KEY } from '@/constants';

const withPrivateRoute = (WrappedComponent: FC) => {
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

        // Redirect to login page while not logged in
        if (!refreshToken) {
          router.push('/login');

          return <div>Loading...</div>;
        }

        return <WrappedComponent />;
      }
    }

    return null;
  };
};

export default withPrivateRoute;
