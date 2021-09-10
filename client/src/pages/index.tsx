// clsx
import clsx from 'clsx';

// types
import { NextPage } from 'next';

import Header from '@/components/common/Header';
import MainLayout from '@/layout/MainLayout';
import Sidebar from '@/components/home/Sidebar';
import Content from '@/components/home/Content';
import Widget from '@/components/home/Widget';

import styles from '@/styles/utilities.module.scss';
import withPrivateRoute from '@/hocs/withPrivateRoute';

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

export default withPrivateRoute(Home);
