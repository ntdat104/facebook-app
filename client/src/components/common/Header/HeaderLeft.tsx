// clsx
import clsx from 'clsx';

// material ui icons
import SearchIcon from '@material-ui/icons/Search';

import Logo from '../Logo';

function HeaderLeft() {
  return (
    <div className={clsx('flex items-center w-content-left')}>
      <Logo width='40' height='40' className='mr-2' />
      <div
        className={clsx(
          'flex items-center justify-center w-10 h-10 lg:px-3 lg:w-60 lg:h-10 rounded-full',
          'bg-light-gray dark:bg-dark-gray'
        )}>
        <SearchIcon
          className={clsx('lg:mr-1', 'fill-current text-gray-icon')}
        />
        <input
          className={clsx(
            'hidden lg:block w-full h-full outline-none',
            'text-light-text dark:text-dark-text bg-transparent'
          )}
          placeholder='Search Facebook'
        />
      </div>
    </div>
  );
}

export default HeaderLeft;
