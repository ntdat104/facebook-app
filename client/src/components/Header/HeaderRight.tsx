// clsx
import clsx from 'clsx';

// material ui core
import { Avatar } from '@material-ui/core';

// material ui icons
import AppsIcon from '@material-ui/icons/Apps';
import ForumIcon from '@material-ui/icons/Forum';
import NotificationsIcon from '@material-ui/icons/Notifications';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import AddIcon from '@material-ui/icons/Add';

import styles from '@/styles/utilities.module.scss';

function HeaderRight() {
  return (
    <ul className={clsx('flex items-center justify-end w-content-right')}>
      <li
        className={clsx(
          'hidden lg:flex items-center rounded-full pl-1 pr-3 py-1',
          'cursor-pointer',
          'lg:hover:bg-light-gray lg:dark:hover:bg-dark-gray'
        )}>
        <Avatar className={styles.circleSizeSmall} alt='Avatar' />
        <span
          className={clsx(
            'font-bold ml-1.5',
            'text-light-text dark:text-dark-text'
          )}>
          Hung
        </span>
      </li>
      <li
        className={clsx(
          'hidden lg:i-flex-center ml-8 w-10 h-10 rounded-full',
          'fill-current text-light-gray dark:text-dark-gray bg-light-gray dark: dark:bg-dark-gray',
          'lg:hover:bg-gray-darker lg:dark:hover:bg-dark-gray-darker',
          'cursor-pointer'
        )}>
        <AppsIcon
          className={clsx('fill-current text-light-text dark:text-dark-text')}
        />
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
        className={clsx(
          'i-flex-center ml-2 w-10 h-10 rounded-full',
          'fill-current text-light-gray dark:text-dark-gray bg-light-gray dark: dark:bg-dark-gray',
          'lg:hover:bg-gray-darker lg:dark:hover:bg-dark-gray-darker',
          'cursor-pointer'
        )}>
        <KeyboardArrowDownIcon
          className={clsx('fill-current text-light-text dark:text-dark-text')}
        />
      </li>
    </ul>
  );
}

export default HeaderRight;
