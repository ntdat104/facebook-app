import { FormEvent, useRef, useState } from 'react';

// clsx
import clsx from 'clsx';

// react file base64
import FileBase64 from 'react-file-base64';

// material ui core
import Avatar from '@material-ui/core/Avatar';

// material ui icons
import VideoCallIcon from '@material-ui/icons/VideoCall';
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
import SentimentVerySatisfiedIcon from '@material-ui/icons/SentimentVerySatisfied';

import { createPost } from '@/redux/slices/postsSlice';
import useMyDispatch from '@/hooks/useMyDispatch';

interface ISenderFormInputs {
  content: string;
  attachment: string;
}

interface IBase64 {
  base64: string;
}

function Sender() {
  const [formValues, setFormValues] = useState<ISenderFormInputs>({
    content: '',
    attachment: '',
  });
  const inputWrapperRef = useRef<HTMLDivElement | null>(null);

  const dispatch = useMyDispatch();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const response = await dispatch(createPost(formValues)).unwrap();

    if (response.success) {
      setFormValues({
        content: '',
        attachment: '',
      });
    }
  };

  const handleUploadAttach = () => {
    const inputEl = inputWrapperRef.current?.children[0] as HTMLInputElement;

    inputEl?.click();
  };

  return (
    <form
      onSubmit={handleSubmit}
      className={clsx(
        'px-4 py-3 mt-6 rounded-lg shadow-md',
        'bg-light dark:bg-dark'
      )}>
      <div className={clsx('flex items-center')}>
        <Avatar className='cursor-pointer' />
        <input
          value={formValues.content}
          onChange={(e) => {
            setFormValues({
              ...formValues,
              content: e.target.value,
            });
          }}
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

        <div className={clsx('hidden')} ref={inputWrapperRef}>
          <FileBase64
            multiple={false}
            accept='image/'
            type='file'
            value={formValues.attachment}
            onDone={({ base64 }: IBase64) => {
              setFormValues({
                ...formValues,
                attachment: base64,
              });
            }}
          />
        </div>
        <li
          onClick={handleUploadAttach}
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
    </form>
  );
}

export default Sender;
