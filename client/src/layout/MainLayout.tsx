import { ReactNode, useContext } from 'react';
import Head from 'next/head';

// clsx
import clsx from 'clsx';

import { ThemeContext } from '@/contexts/ThemeContext';

interface IProps {
  children: ReactNode;
}

function MainLayout({ children }: IProps) {
  const { isDark } = useContext(ThemeContext);

  return (
    <>
      <Head>
        <meta charSet='UTF-8' />
        <meta httpEquiv='X-UA-Compatible' content='IE=edge' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <title>Facebook</title>
      </Head>

      <div className={clsx(isDark ? 'dark' : 'light', 'i-scrollbar-show')}>
        {children}
      </div>
    </>
  );
}

export default MainLayout;
