import { useSelector } from 'react-redux';

// clsx
import clsx from 'clsx';

// material ui core
import Avatar from '@material-ui/core/Avatar';

// material ui icons
import GroupIcon from '@material-ui/icons/Group';
import ThumbUpAltOutlinedIcon from '@material-ui/icons/ThumbUpAltOutlined';
import ChatBubbleOutlineOutlinedIcon from '@material-ui/icons/ChatBubbleOutlineOutlined';
import ShareOutlinedIcon from '@material-ui/icons/ShareOutlined';
import DeleteOutlineOutlinedIcon from '@material-ui/icons/DeleteOutlineOutlined';

// types
import { IPost } from '@/redux/types';

import { convertTime } from '@/utils/convertTime';
import useMyDispatch from '@/hooks/useMyDispatch';
import { deletePost, likePost } from '@/redux/slices/postsSlice';
import { postsState$ } from '@/redux/selectors';

import NextImage from '@/components/common/NextImage';

import like from '@/assets/svgs/Post/like.svg';
import sad from '@/assets/svgs/Post/sad.svg';
import haha from '@/assets/svgs/Post/haha.svg';

interface IProps {
  canDelete: boolean;
  post: IPost;
}

function Post({ canDelete, post }: IProps) {
  const dispatch = useMyDispatch();
  const posts = useSelector(postsState$).posts;

  const handleDeletePost = (id: string) => {
    dispatch(deletePost(id));
  };

  const handleLikePost = (id: string) => {
    const selectedPost = posts.find((post) => post._id === id);

    const likeCount = selectedPost && selectedPost.likeCount + 1;

    dispatch(likePost({ id, likeCount: likeCount as number }));
  };

  return (
    <div className={clsx('mt-6', 'bg-light dark:bg-dark rounded-lg shadow-md')}>
      <div className={clsx('relative', 'flex items-center px-4 py-3')}>
        <Avatar className='cursor-pointer' src={post.user.avatar} />
        <div className={clsx('ml-2')}>
          <div
            className={clsx(
              'font-bold',
              'text-light-text dark:text-dark-text',
              'hover:underline',
              'cursor-pointer'
            )}>
            {post.user.username}
          </div>
          <div>
            <span
              className={clsx(
                'mr-2 text-xs',
                'text-light-gray-darkest dark:text-dark-gray-darkest',
                'hover:underline',
                'cursor-pointer'
              )}>
              {convertTime(post.createdAt)}
            </span>
            <GroupIcon
              className={clsx(
                'fill-current text-light-gray-darkest dark:text-dark-gray-darkest'
              )}
              fontSize='small'
            />
          </div>
        </div>

        {canDelete && (
          <DeleteOutlineOutlinedIcon
            onClick={() => handleDeletePost(post._id)}
            className={clsx(
              'absolute right-1 top-1',
              '!text-xl !w-10 !h-10 p-2.5',
              'fill-primary text-gray-icon',
              'cursor-pointer'
            )}
          />
        )}
      </div>

      <p
        className={clsx(
          'px-4 pt-2 pb-3',
          'text-light-text dark:text-dark-text'
        )}>
        {post.content}
      </p>

      {post.attachment && (
        <div className={clsx('h-post', 'cursor-pointer')}>
          <NextImage src={post.attachment} alt='Post' />
        </div>
      )}

      <div className={clsx('px-4 py-2')}>
        {post.likeCount > 0 && (
          <div className={clsx('flex items-center justify-between mt-0.5')}>
            <div className={clsx('flex items-start')}>
              <div className={clsx('flex items-center')}>
                <div
                  className={clsx(
                    'z-2',
                    'w-4.5 shadow-emoji-light dark:shadow-emoji-dark rounded-full',
                    'cursor-pointer'
                  )}>
                  <NextImage src={like.src} alt='Emoji'></NextImage>
                </div>
              </div>
              <span
                className={clsx(
                  'ml-2',
                  'text-dark-gray-darkest dark:text-dark-gray-darkest',
                  'hover:underline',
                  'cursor-pointer'
                )}>
                {post.likeCount}
              </span>
            </div>
            <div className={clsx('flex items-center')}>
              <span
                className={clsx(
                  'hidden text-light-gray-darkest dark:text-dark-gray-darkest',
                  'hover:underline',
                  'cursor-pointer'
                )}>
                0 Comments
              </span>
              <span
                className={clsx(
                  'ml-2',
                  'hidden text-light-gray-darkest dark:text-dark-gray-darkest',
                  'hover:underline',
                  'cursor-pointer'
                )}>
                0 Shares
              </span>
            </div>
          </div>
        )}

        <div
          className={clsx(
            'h-px my-2',
            'bg-light-gray-darker dark:bg-dark-gray-darker'
          )}
        />

        <ul className={clsx('flex justify-between')}>
          <li
            onClick={() => handleLikePost(post._id)}
            className={clsx(
              'py-2 text-center w-full rounded-lg',
              'hover:bg-light-gray dark:hover:bg-dark-gray',
              'cursor-pointer'
            )}>
            <ThumbUpAltOutlinedIcon
              className={clsx(
                '!text-base md:!text-xl',
                'fill-current text-light-gray-darkest dark:text-dark-gray-darkest'
              )}
            />
            <span
              className={clsx(
                'ml-1.5 font-bold text-xs md:text-sm',
                'text-light-gray-darkest dark:text-dark-gray-darkest',
                'select-none'
              )}>
              Like
            </span>
          </li>
          <li
            className={clsx(
              'py-2 text-center w-full rounded-lg',
              'hover:bg-light-gray dark:hover:bg-dark-gray',
              'cursor-pointer'
            )}>
            <ChatBubbleOutlineOutlinedIcon
              className={clsx(
                '!text-base md:!text-xl',
                'fill-current text-light-gray-darkest dark:text-dark-gray-darkest'
              )}
            />
            <span
              className={clsx(
                'ml-1.5 font-bold text-xs md:text-sm',
                'text-light-gray-darkest dark:text-dark-gray-darkest',
                'select-none'
              )}>
              Comment
            </span>
          </li>
          <li
            className={clsx(
              'py-2 text-center w-full rounded-lg',
              'hover:bg-light-gray dark:hover:bg-dark-gray',
              'cursor-pointer'
            )}>
            <ShareOutlinedIcon
              className={clsx(
                '!text-base md:!text-xl',
                'fill-current text-light-gray-darkest dark:text-dark-gray-darkest'
              )}
            />
            <span
              className={clsx(
                'ml-1.5 font-bold text-xs md:text-sm',
                'text-light-gray-darkest dark:text-dark-gray-darkest',
                'select-none'
              )}>
              Share
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Post;
