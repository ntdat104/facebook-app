import { useEffect } from 'react';
import { useSelector } from 'react-redux';

import useMyDispatch from '@/hooks/useMyDispatch';
import { postsState$ } from '@/redux/selectors';

import Post from './Post';
import { getPosts } from '@/redux/slices/postsSlice';

function PostList() {
  const dispatch = useMyDispatch();
  const posts = useSelector(postsState$).posts;

  // Fetch all posts
  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  return (
    <>
      {posts.map((post) => (
        <Post key={post._id} {...post} />
      ))}
    </>
  );
}

export default PostList;
