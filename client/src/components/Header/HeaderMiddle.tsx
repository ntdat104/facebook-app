// clsx
import clsx from 'clsx';

// material ui icons filled
import HomeIcon from '@material-ui/icons/Home';

// material ui icons outline
import PeopleAltOutlinedIcon from '@material-ui/icons/PeopleAltOutlined';
import EmojiFlagsOutlinedIcon from '@material-ui/icons/EmojiFlagsOutlined';
import SubscriptionsOutlinedIcon from '@material-ui/icons/SubscriptionsOutlined';
import SupervisedUserCircleOutlinedIcon from '@material-ui/icons/SupervisedUserCircleOutlined';
import MenuIcon from '@material-ui/icons/Menu';

function HeaderMiddle() {
  return (
    <div className={clsx('flex items-center py-1 w-content-middle')}>
      {/* desktop */}
      <ul className={clsx('hidden md:flex items-center')}>
        <li
          className={clsx(
            'relative',
            'i-flex-center md:w-15 lg:w-32.5 h-12',
            'cursor-pointer'
          )}>
          <HomeIcon
            className={clsx('!text-3xl', 'fill-primary text-primary')}
          />
          <div
            className={clsx(
              'absolute top-full left-0 right-0',
              'border-b-3 border-primary rounded-full'
            )}
          />
        </li>
        <li
          className={clsx(
            'i-flex-center md:w-15 lg:w-32.5 h-12 ml-2 rounded-lg',
            'lg:hover:bg-light-gray lg:dark:hover:bg-dark-gray',
            'cursor-pointer'
          )}>
          <PeopleAltOutlinedIcon
            className={clsx('!text-3xl', 'fill-primary text-gray-icon')}
          />
        </li>
        <li
          className={clsx(
            'i-flex-center md:w-15 lg:w-32.5 h-12 ml-2 rounded-lg',
            'lg:hover:bg-light-gray lg:dark:hover:bg-dark-gray',
            'cursor-pointer'
          )}>
          <EmojiFlagsOutlinedIcon
            className={clsx('!text-3xl', 'fill-primary text-gray-icon')}
          />
        </li>
        <li
          className={clsx(
            'i-flex-center md:w-15 lg:w-32.5 h-12 ml-2 rounded-lg',
            'lg:hover:bg-light-gray lg:dark:hover:bg-dark-gray',
            'cursor-pointer'
          )}>
          <SubscriptionsOutlinedIcon
            className={clsx('!text-3xl', 'fill-primary text-gray-icon')}
          />
        </li>
        <li
          className={clsx(
            'relative',
            'hidden lg:i-flex-center md:w-15 lg:w-32.5 h-12 ml-2 rounded-lg',
            'lg:hover:bg-light-gray lg:dark:hover:bg-dark-gray',
            'cursor-pointer'
          )}>
          <SupervisedUserCircleOutlinedIcon
            className={clsx('!text-3xl', 'fill-primary text-gray-icon')}
          />
          <div
            className={clsx(
              'absolute top-1 right-10',
              'i-flex-center text-xs w-5 h-5 rounded-full',
              'text-white bg-red'
            )}>
            <span>4</span>
          </div>
        </li>
      </ul>

      {/* mobile */}
      <div
        className={clsx('i-flex-center lg:hidden md:w-15 lg:w-32.5 h-12 ml-2')}>
        <MenuIcon
          className={clsx('!text-3xl', 'fill-primary text-gray-icon')}
        />
      </div>
    </div>
  );
}

export default HeaderMiddle;
