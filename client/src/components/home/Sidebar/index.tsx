import { authState$ } from '@/redux/selectors';
import { useSelector } from 'react-redux';

// clsx
import clsx from 'clsx';

// material ui core
import { Avatar } from '@material-ui/core';

// material ui icons
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';

import NextImage from '@/components/common/NextImage';

import styles from '@/styles/utilities.module.scss';

import {
  friendsIcon,
  groupsIcon,
  marketplaceIcon,
  pagesIcon,
  watchIcon,
  groupOne,
  groupTwo,
  groupThree,
  groupFour,
  groupFive,
  groupSix,
  groupSeven,
  groupEight,
  groupNine,
  groupTen,
  groupEleven,
} from '@/utils/sidebarIcons';

function Sidebar() {
  const user = useSelector(authState$);

  return (
    <div
      className={clsx(
        'relative',
        'hidden lg:block h-sidebar ml-2 pt-5 pb-1 overflow-y-scroll',
        'text-light-text dark:text-dark-text'
      )}>
      <ul>
        <li
          className={clsx(
            'flex items-center px-2 py-2 rounded-lg',
            'hover:bg-light-gray-dark dark:hover:bg-dark-gray-dark',
            'cursor-pointer'
          )}>
          <Avatar
            className={styles.circleSize}
            src={user?.avatar}
            alt='Avatar'
          />
          <span className={clsx('ml-3 font-bold')}>{user.username}</span>
        </li>
        <li
          className={clsx(
            'flex items-center px-2 py-2 rounded-lg',
            'hover:bg-light-gray-dark dark:hover:bg-dark-gray-dark',
            'cursor-pointer'
          )}>
          <div className={clsx('flex-shrink-0 w-9')}>
            <NextImage src={friendsIcon.src} alt='Friends' />
          </div>
          <span className={clsx('ml-3 font-bold')}>Friends</span>
        </li>
        <li
          className={clsx(
            'flex items-center px-2 py-2 rounded-lg',
            'hover:bg-light-gray-dark dark:hover:bg-dark-gray-dark',
            'cursor-pointer'
          )}>
          <div className={clsx('flex-shrink-0 w-9')}>
            <NextImage src={watchIcon.src} alt='Watch' />
          </div>
          <span className={clsx('ml-3 font-bold')}>Watch</span>
        </li>
        <li
          className={clsx(
            'flex items-center px-2 py-2 rounded-lg',
            'hover:bg-light-gray-dark dark:hover:bg-dark-gray-dark',
            'cursor-pointer'
          )}>
          <div className={clsx('flex-shrink-0 w-9')}>
            <NextImage src={pagesIcon.src} alt='Pages' />
          </div>
          <span className={clsx('ml-3 font-bold')}>Pages</span>
        </li>
        <li
          className={clsx(
            'flex items-center px-2 py-2 rounded-lg',
            'hover:bg-light-gray-dark dark:hover:bg-dark-gray-dark',
            'cursor-pointer'
          )}>
          <div className={clsx('flex-shrink-0 w-9')}>
            <NextImage src={groupsIcon.src} alt='Groups' />
          </div>
          <span className={clsx('ml-3 font-bold')}>Groups</span>
        </li>
        <li
          className={clsx(
            'flex items-center px-2 py-2 rounded-lg',
            'hover:bg-light-gray-dark dark:hover:bg-dark-gray-dark',
            'cursor-pointer'
          )}>
          <div className={clsx('flex-shrink-0 w-9')}>
            <NextImage src={marketplaceIcon.src} alt='Marketplace' />
          </div>
          <span className={clsx('ml-3 font-bold')}>Marketplace</span>
        </li>
        <li
          className={clsx(
            'group flex items-center px-2 py-2 rounded-lg',
            'hover:bg-light-gray-dark dark:hover:bg-dark-gray-dark',
            'cursor-pointer'
          )}>
          <div
            className={clsx(
              'i-flex-center w-9 h-9 rounded-full',
              'group-hover:bg-light-gray-darker dark:group-hover:bg-dark-gray',
              'bg-light-gray-dark dark:bg-dark-gray-dark'
            )}>
            <KeyboardArrowDownIcon />
          </div>
          <span className={clsx('ml-3 font-bold')}>See More</span>
        </li>
      </ul>

      <div
        className={clsx(
          'h-px my-4 px-2',
          'bg-light-gray-darker dark:bg-dark-gray-darker'
        )}
      />

      <ul>
        <li className={clsx('mb-3')}>
          <span
            className={clsx(
              'ml-3 font-bold text-base',
              'text-light-gray-darkest dark:text-dark-gray-darkest'
            )}>
            Your Shortcuts
          </span>
        </li>
        <li
          className={clsx(
            'flex items-center px-2 py-2 rounded-lg',
            'hover:bg-light-gray-dark dark:hover:bg-dark-gray-dark',
            'cursor-pointer'
          )}>
          <div className={clsx('flex-shrink-0 w-9')}>
            <NextImage src={groupOne.src} subClass='rounded-lg' alt='Group' />
          </div>
          <span className={clsx('ml-3 font-bold')}>Are you serious?</span>
        </li>
        <li
          className={clsx(
            'flex items-center px-2 py-2 rounded-lg',
            'hover:bg-light-gray-dark dark:hover:bg-dark-gray-dark',
            'cursor-pointer'
          )}>
          <div className={clsx('flex-shrink-0 w-9')}>
            <NextImage src={groupTwo.src} subClass='rounded-lg' alt='Group' />
          </div>
          <span className={clsx('ml-3 font-bold i-truncate')}>
            Học Viên Sách Hack Não 1500 Từ Tiếng Anh
          </span>
        </li>
        <li
          className={clsx(
            'flex items-center px-2 py-2 rounded-lg',
            'hover:bg-light-gray-dark dark:hover:bg-dark-gray-dark',
            'cursor-pointer'
          )}>
          <div className={clsx('flex-shrink-0 w-9')}>
            <NextImage src={groupThree.src} subClass='rounded-lg' alt='Group' />
          </div>
          <span className={clsx('ml-3 font-bold')}>DUMA Entertainment</span>
        </li>
        <li
          className={clsx(
            'flex items-center px-2 py-2 rounded-lg',
            'hover:bg-light-gray-dark dark:hover:bg-dark-gray-dark',
            'cursor-pointer'
          )}>
          <div className={clsx('flex-shrink-0 w-9')}>
            <NextImage src={groupFour.src} subClass='rounded-lg' alt='Group' />
          </div>
          <span className={clsx('ml-3 font-bold')}>Theanh28</span>
        </li>
        <li
          className={clsx(
            'flex items-center px-2 py-2 rounded-lg',
            'hover:bg-light-gray-dark dark:hover:bg-dark-gray-dark',
            'cursor-pointer'
          )}>
          <div className={clsx('flex-shrink-0 w-9')}>
            <NextImage src={groupFive.src} subClass='rounded-lg' alt='Group' />
          </div>
          <span className={clsx('ml-3 font-bold')}>Hóng hớt Showbiz</span>
        </li>
        <li
          className={clsx(
            'flex items-center px-2 py-2 rounded-lg',
            'hover:bg-light-gray-dark dark:hover:bg-dark-gray-dark',
            'cursor-pointer'
          )}>
          <div className={clsx('flex-shrink-0 w-9')}>
            <NextImage
              src={groupSix.src}
              subClass='rounded-lg'
              alt='Marketplace'
            />
          </div>
          <span className={clsx('ml-3 font-bold')}>
            UTE-Kĩ thuật điện tử viễn thông
          </span>
        </li>
        <li
          className={clsx(
            'group flex items-center px-2 py-2 rounded-lg',
            'hover:bg-light-gray-dark dark:hover:bg-dark-gray-dark',
            'cursor-pointer'
          )}>
          <div
            className={clsx(
              'i-flex-center w-9 h-9 rounded-full',
              'group-hover:bg-light-gray-darker dark:group-hover:bg-dark-gray',
              'bg-light-gray-dark dark:bg-dark-gray-dark'
            )}>
            <KeyboardArrowDownIcon />
          </div>
          <span className={clsx('ml-3 font-bold')}>See More</span>
        </li>
      </ul>

      <ul
        className={clsx(
          'flex items-center flex-wrap ml-3 mt-4 text-xs pb-4',
          'text-gray-darkest'
        )}>
        <li className={clsx('hover:underline', 'cursor-pointer')}>Privacy</li>
        <li>&nbsp;·&nbsp;</li>
        <li className={clsx('hover:underline', 'cursor-pointer')}>Terms</li>
        <li>&nbsp;·&nbsp;</li>
        <li className={clsx('hover:underline', 'cursor-pointer')}>
          Advertising
        </li>
        <li>&nbsp;·&nbsp;</li>
        <li className={clsx('hover:underline', 'cursor-pointer')}>
          Ad Choices
        </li>
        <li>&nbsp;·&nbsp;</li>
        <li className={clsx('hover:underline', 'cursor-pointer')}>Cookies</li>
        <li>&nbsp;·&nbsp;</li>
        <li className={clsx('hover:underline', 'cursor-pointer')}>More</li>
        <li>&nbsp;·&nbsp;</li>
        <li className={clsx('hover:underline', 'cursor-pointer')}>
          Facebook © 2021
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
