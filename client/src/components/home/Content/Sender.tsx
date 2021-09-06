// clsx
import clsx from 'clsx';

// material ui core
import Avatar from '@material-ui/core/Avatar';

// material ui icons
import VideoCallIcon from '@material-ui/icons/VideoCall';
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
import SentimentVerySatisfiedIcon from '@material-ui/icons/SentimentVerySatisfied';

function Sender() {
  return (
    <div
      className={clsx(
        'px-4 py-3 mt-6 rounded-lg shadow-md',
        'bg-light dark:bg-dark'
      )}>
      <div className={clsx('flex items-center')}>
        <Avatar className='cursor-pointer' />
        <input
          className={clsx(
            'flex-1 rounded-full px-4 py-2.5 ml-2 outline-none',
            'bg-light-gray dark:bg-dark-gray text-light-text dark:text-dark-text'
          )}
          placeholder="What's on your mind, Hung?"
        />
      </div>

      <div
        className={clsx(
          'border-b my-3 border-light-gray-darker dark:border-dark-gray-darker'
        )}
      />

      <ul className={clsx('flex justify-between')}>
        <li
          className={clsx(
            'i-flex-center w-full rounded-lg text-center py-1.5',
            'hover:bg-light-gray dark:hover:bg-dark-gray',
            'cursor-pointer'
          )}>
          <VideoCallIcon
            fontSize='large'
            className={clsx('fill-current text-red')}
          />
          <span
            className={clsx(
              'ml-1.5 font-bold',
              'text-light-gray-darkest dark:text-dark-gray-darkest'
            )}>
            Live Video
          </span>
        </li>
        <li
          className={clsx(
            'i-flex-center w-full rounded-lg text-center py-1.5',
            'hover:bg-light-gray dark:hover:bg-dark-gray',
            'cursor-pointer'
          )}>
          <PhotoLibraryIcon
            fontSize='large'
            className={clsx('fill-current text-green')}
          />
          <span
            className={clsx(
              'ml-1.5 font-bold',
              'text-light-gray-darkest dark:text-dark-gray-darkest'
            )}>
            Photo/Video
          </span>
        </li>
        <li
          className={clsx(
            'i-flex-center w-full rounded-lg text-center py-1.5',
            'hover:bg-light-gray dark:hover:bg-dark-gray',
            'cursor-pointer'
          )}>
          <SentimentVerySatisfiedIcon
            fontSize='large'
            className={clsx('fill-current text-yellow')}
          />
          <span
            className={clsx(
              'ml-1.5 font-bold',
              'text-light-gray-darkest dark:text-dark-gray-darkest'
            )}>
            Feeling/Activity
          </span>
        </li>
      </ul>
    </div>
  );
}

export default Sender;
