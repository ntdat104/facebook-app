// clsx
import clsx from 'clsx';

// material ui core
import { Avatar } from '@material-ui/core';

// material ui icons
import VideoCallIcon from '@material-ui/icons/VideoCall';
import SearchIcon from '@material-ui/icons/Search';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';

import styles from '@/styles/utilities.module.scss';

function Widget() {
  return (
    <div className='hidden lg:block pt-6 overflow-y-scroll w-content-right h-widget'>
      <div className={clsx('flex items-center justify-between mb-3 px-3')}>
        <span
          className={clsx(
            'font-bold text-base',
            'text-light-gray-darkest dark:text-dark-gray-darkest'
          )}>
          Contacts
        </span>
        <div className={clsx('flex items-center')}>
          <div
            className={clsx(
              'i-flex-center rounded-full',
              'hover:bg-light-gray-dark dark:hover:bg-dark-gray-dark',
              'cursor-pointer',
              styles.circleSize
            )}>
            <VideoCallIcon
              className={clsx(
                'fill-current text-light-gray-darkest dark:text-dark-gray-darkest'
              )}
            />
          </div>
          <div
            className={clsx(
              'i-flex-center rounded-full',
              'hover:bg-light-gray-dark dark:hover:bg-dark-gray-dark',
              'cursor-pointer',
              styles.circleSize
            )}>
            <SearchIcon
              className={clsx(
                'fill-current text-light-gray-darkest dark:text-dark-gray-darkest'
              )}
            />
          </div>
          <div
            className={clsx(
              'i-flex-center rounded-full',
              'hover:bg-light-gray-dark dark:hover:bg-dark-gray-dark',
              'cursor-pointer',
              styles.circleSize
            )}>
            <MoreHorizIcon
              className={clsx(
                'fill-current text-light-gray-darkest dark:text-dark-gray-darkest'
              )}
            />
          </div>
        </div>
      </div>

      <ul className={clsx('text-black')}>
        <li
          className={clsx(
            'flex items-center p-2 rounded-lg px-3',
            'hover:bg-light-gray-dark dark:hover:bg-dark-gray-dark',
            'cursor-pointer'
          )}>
          <Avatar
            className={styles.circleSize}
            src='https://avatars.dicebear.com/api/avataaars/4TsWwy.svg'
          />
          <span
            className={clsx(
              'ml-3 font-bold',
              'text-light-text dark:text-dark-text'
            )}>
            Erik
          </span>
        </li>
      </ul>
    </div>
  );
}

export default Widget;
