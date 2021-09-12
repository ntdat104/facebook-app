import { useContext } from 'react';
import { authState$ } from '@/redux/selectors';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/router';

// clsx
import clsx from 'clsx';

// material ui core
import { Avatar } from '@material-ui/core';

// material ui icons
import Brightness7Icon from '@material-ui/icons/Brightness7';
import Brightness4Icon from '@material-ui/icons/Brightness4';
import ForumIcon from '@material-ui/icons/Forum';
import NotificationsIcon from '@material-ui/icons/Notifications';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import AddIcon from '@material-ui/icons/Add';

import { LOCAL_STORAGE_REFRESH_TOKEN_KEY } from '@/constants';
import { ThemeContext } from '@/contexts/ThemeContext';

import styles from '@/styles/utilities.module.scss';

function HeaderRight() {
  const user = useSelector(authState$);
  const { isDark, toggleDarkMode } = useContext(ThemeContext);
  const router = useRouter();

  const handleLogout = () => {
    router.push('/login');
    localStorage.removeItem(LOCAL_STORAGE_REFRESH_TOKEN_KEY);
  };

  return (
    <ul className={clsx('flex items-center justify-end w-content-right')}>
      <li
        className={clsx(
          'hidden lg:flex items-center rounded-full pl-1 pr-3 py-1',
          'cursor-pointer',
          'lg:hover:bg-light-gray lg:dark:hover:bg-dark-gray'
        )}>
        <Avatar
          className={styles.circleSizeSmall}
          src={user.avatar}
          alt='Avatar'
        />
        <span
          className={clsx(
            'font-bold ml-1.5',
            'text-light-text dark:text-dark-text'
          )}>
          {user.username}
        </span>
      </li>
      <li
        onClick={toggleDarkMode}
        className={clsx(
          'hidden lg:i-flex-center ml-8 w-10 h-10 rounded-full',
          'fill-current text-light-gray dark:text-dark-gray bg-light-gray dark: dark:bg-dark-gray',
          'lg:hover:bg-gray-darker lg:dark:hover:bg-dark-gray-darker',
          'cursor-pointer'
        )}>
        {isDark ? (
          <Brightness7Icon
            className={clsx('fill-current text-light-text dark:text-dark-text')}
          />
        ) : (
          <Brightness4Icon
            className={clsx('fill-current text-light-text dark:text-dark-text')}
          />
        )}
      </li>
      <li
        className={clsx(
          'i-flex-center lg:hidden ml-2 w-10 h-10 rounded-full',
          'fill-current text-light-gray dark:text-dark-gray bg-light-gray dark: dark:bg-dark-gray',
          'lg:hover:bg-gray-darker lg:dark:hover:bg-dark-gray-darker',
          'cursor-pointer'
        )}>
        <AddIcon
          className={clsx('fill-current text-light-text dark:text-dark-text')}
        />
      </li>
      <li
        className={clsx(
          'i-flex-center ml-2 w-10 h-10 rounded-full',
          'fill-current text-light-gray dark:text-dark-gray bg-light-gray dark: dark:bg-dark-gray',
          'lg:hover:bg-gray-darker lg:dark:hover:bg-dark-gray-darker',
          'cursor-pointer'
        )}>
        <ForumIcon
          className={clsx(
            '!text-lg',
            'fill-current text-light-text dark:text-dark-text'
          )}
        />
      </li>
      <li
        className={clsx(
          'i-flex-center ml-2 w-10 h-10 rounded-full',
          'fill-current text-light-gray dark:text-dark-gray bg-light-gray dark: dark:bg-dark-gray',
          'lg:hover:bg-gray-darker lg:dark:hover:bg-dark-gray-darker',
          'cursor-pointer'
        )}>
        <NotificationsIcon
          className={clsx(
            '!text-xl',
            'fill-current text-light-text dark:text-dark-text'
          )}
        />
      </li>
      <li
        onClick={handleLogout}
        className={clsx(
          'i-flex-center ml-2 w-10 h-10 rounded-full',
          'fill-current text-light-gray dark:text-dark-gray bg-light-gray dark: dark:bg-dark-gray',
          'lg:hover:bg-gray-darker lg:dark:hover:bg-dark-gray-darker',
          'cursor-pointer'
        )}>
        <ExitToAppIcon
          className={clsx('fill-current text-light-text dark:text-dark-text')}
        />
      </li>
    </ul>
  );
}

export default HeaderRight;
