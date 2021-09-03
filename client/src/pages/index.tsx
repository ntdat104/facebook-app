// clsx
import clsx from 'clsx';

import Header from '@/components/Header';
import Sidebar from '@/components/Sidebar';
import MainLayout from '@/layout/MainLayout';
import Content from '@/components/Content';
import Widget from '@/components/Widget';

// types
import type { NextPage } from 'next';

import styles from '@/styles/utilities.module.scss';

const Home: NextPage = () => {
  return (
    <MainLayout>
      <Header />

      <div
        className={clsx(
          'absolute top-header',
          'flex items-start justify-between w-full',
          'bg-light-body dark:bg-dark-body'
        )}>
        <div
          className={clsx(
            'sticky top-header left-0',
            'i-scrollbar w-content-left dark:dark',
            styles.showScrollbar
          )}>
          <Sidebar />

          <div className={clsx(styles.hideScrollbar, 'dark:dark')} />
        </div>

        <Content />
        <div
          className={clsx(
            'sticky top-header right-0',
            'i-scrollbar',
            styles.showScrollbar
          )}>
          <Widget />

          <div className={clsx(styles.hideScrollbar, 'dark:dark')} />
        </div>
      </div>
    </MainLayout>
  );
};

export default Home;
