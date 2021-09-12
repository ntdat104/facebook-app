import { useSelector } from 'react-redux';
import NextImage from '@/components/common/NextImage';

// clsx
import clsx from 'clsx';

// material ui icons
import AddIcon from '@material-ui/icons/Add';

import { authState$ } from '@/redux/selectors';

function Stories() {
  const user = useSelector(authState$);

  return (
    <ul className={clsx('grid grid-cols-3 md:grid-cols-6 gap-2')}>
      <li
        className={clsx(
          'relative',
          'pb-2.5 rounded-lg overflow-hidden shadow-md',
          'bg-light dark:bg-dark',
          'cursor-pointer'
        )}>
        <div className={clsx('relative', 'h-32.5')}>
          {user.avatar && <NextImage src={user.avatar} alt='Avatar' />}
          <div
            className={clsx(
              'absolute bottom-0 left-0',
              'h-full w-full opacity-20',
              'bg-gradient-to-t from-black '
            )}
          />
        </div>
        <div
          className={clsx(
            'text-center mt-7.5 text-xs font-bold text-light-text dark:text-dark-text'
          )}>
          Create Story
        </div>
        <div
          className={clsx(
            'absolute left-1/2 bottom-10 transform translate-y-px',
            'i-flex-center w-10 h-10 rounded-full border-4 border-light dark:border-dark transform -translate-x-1/2',
            'bg-primary'
          )}>
          <AddIcon
            className={clsx(
              '!text-2xl',
              'text-white dark:text-dark-text fill-current'
            )}
          />
        </div>
      </li>

      <li
        className={clsx(
          'relative',
          'rounded-lg overflow-hidden shadow-md',
          'cursor-pointer'
        )}>
        <div className={clsx('h-full w-full')}>
          <NextImage
            src='https://avatars.dicebear.com/api/avataaars/4T1Wwy.svg'
            alt='Thumb'
          />
          <div
            className={clsx(
              'absolute bottom-0 left-0',
              'h-full w-full opacity-40',
              'bg-gradient-to-t from-black '
            )}
          />
        </div>
        <div
          className={clsx(
            'absolute left-0 right-0 bottom-2.5',
            'mt-7.5 px-3 i-truncate text-xs font-bold',
            'text-white dark:text-dark-text'
          )}>
          Sheep
        </div>
        <div className={clsx('absolute top-2 left-2', 'i-flex-center')}>
          <div
            className={clsx(
              'w-10 h-10 border-3 border-primary rounded-full',
              'bg-white'
            )}>
            <NextImage
              src='https://avatars.dicebear.com/api/avataaars/4T2Wwy.svg'
              subClass='rounded-full'
              alt='Avatar'
            />
          </div>
        </div>
      </li>

      <li
        className={clsx(
          'relative',
          'rounded-lg overflow-hidden shadow-md',
          'cursor-pointer'
        )}>
        <div className={clsx('h-full w-full')}>
          <NextImage
            src='https://avatars.dicebear.com/api/avataaars/4vsWwy.svg'
            alt='Thumb'
          />
          <div
            className={clsx(
              'absolute bottom-0 left-0',
              'h-full w-full opacity-40',
              'bg-gradient-to-t from-black '
            )}
          />
        </div>
        <div
          className={clsx(
            'absolute left-0 right-0 bottom-2.5',
            'mt-7.5 px-3 i-truncate text-xs font-bold',
            'text-white dark:text-dark-text'
          )}>
          Erik
        </div>
        <div className={clsx('absolute top-2 left-2', 'i-flex-center')}>
          <div
            className={clsx(
              'w-10 h-10 border-3 border-primary rounded-full',
              'bg-white'
            )}>
            <NextImage
              src='https://avatars.dicebear.com/api/avataaars/1TsWwy.svg'
              subClass='rounded-full'
              alt='Avatar'
            />
          </div>
        </div>
      </li>

      <li
        className={clsx(
          'relative',
          'hidden md:block rounded-lg overflow-hidden shadow-md',
          'cursor-pointer'
        )}>
        <div className={clsx('h-full w-full')}>
          <NextImage
            src='https://avatars.dicebear.com/api/avataaars/3TsWwy.svg'
            alt='Thumb'
          />
          <div
            className={clsx(
              'absolute bottom-0 left-0',
              'h-full w-full opacity-40',
              'bg-gradient-to-t from-black '
            )}
          />
        </div>
        <div
          className={clsx(
            'absolute left-0 right-0 bottom-2.5',
            'mt-7.5 px-3 i-truncate text-xs font-bold',
            'text-white dark:text-dark-text'
          )}>
          Elephant
        </div>
        <div className={clsx('absolute top-2 left-2', 'i-flex-center')}>
          <div
            className={clsx(
              'w-10 h-10 border-3 border-primary rounded-full',
              'bg-white'
            )}>
            <NextImage
              src='https://avatars.dicebear.com/api/avataaars/42sWwy.svg'
              subClass='rounded-full'
              alt='Avatar'
            />
          </div>
        </div>
      </li>

      <li
        className={clsx(
          'relative',
          'hidden md:block rounded-lg overflow-hidden shadow-md',
          'cursor-pointer'
        )}>
        <div className={clsx('h-full w-full')}>
          <NextImage
            src='https://avatars.dicebear.com/api/avataaars/41sWwy.svg'
            alt='Thumb'
          />
          <div
            className={clsx(
              'absolute bottom-0 left-0',
              'h-full w-full opacity-40',
              'bg-gradient-to-t from-black '
            )}
          />
        </div>
        <div
          className={clsx(
            'absolute left-0 right-0 bottom-2.5',
            'mt-7.5 px-3 i-truncate text-xs font-bold',
            'text-white dark:text-dark-text'
          )}>
          Alaska
        </div>
        <div className={clsx('absolute top-2 left-2', 'i-flex-center')}>
          <div
            className={clsx(
              'w-10 h-10 border-3 border-primary rounded-full',
              'bg-white'
            )}>
            <NextImage
              src='https://avatars.dicebear.com/api/avataaars/4T55wy.svg'
              subClass='rounded-full'
              alt='Avatar'
            />
          </div>
        </div>
      </li>

      <li
        className={clsx(
          'relative',
          'hidden md:block rounded-lg overflow-hidden shadow-md',
          'cursor-pointer'
        )}>
        <div className={clsx('h-full w-full')}>
          <NextImage
            src='https://avatars.dicebear.com/api/avataaars/4T8Wwy.svg'
            alt='Thumb'
          />
          <div
            className={clsx(
              'absolute bottom-0 left-0',
              'h-full w-full opacity-40',
              'bg-gradient-to-t from-black '
            )}
          />
        </div>
        <div
          className={clsx(
            'absolute left-0 right-0 bottom-2.5',
            'mt-7.5 px-3 i-truncate text-xs font-bold',
            'text-light-text dark:text-dark-text'
          )}>
          Shrimp
        </div>
        <div className={clsx('absolute top-2 left-2', 'i-flex-center')}>
          <div
            className={clsx(
              'w-10 h-10 border-3 border-primary rounded-full',
              'bg-white'
            )}>
            <NextImage
              src='https://avatars.dicebear.com/api/avataaars/7TsWwy.svg'
              subClass='rounded-full'
              alt='Avatar'
            />
          </div>
        </div>
      </li>
    </ul>
  );
}

export default Stories;
