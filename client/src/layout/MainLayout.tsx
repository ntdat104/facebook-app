import { ReactNode } from 'react';

import Head from 'next/head';

interface IProps {
  children: ReactNode;
}

function MainLayout({ children }: IProps) {
  return (
    <>
      <Head>
        <meta charSet='UTF-8' />
        <meta httpEquiv='X-UA-Compatible' content='IE=edge' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <title>Facebook</title>
      </Head>

      <div className='dark'>{children}</div>
    </>
  );
}

export default MainLayout;
