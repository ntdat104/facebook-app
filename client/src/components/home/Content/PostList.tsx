import { useEffect } from 'react';
import { useSelector } from 'react-redux';

import useMyDispatch from '@/hooks/useMyDispatch';
import { authState$, postsState$ } from '@/redux/selectors';

import Post from './Post';
import { getPosts } from '@/redux/slices/postsSlice';

function PostList() {
  const dispatch = useMyDispatch();
  const posts = useSelector(postsState$).posts;
  const user = useSelector(authState$);

  // Fetch all posts
  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  return (
    <>
      {posts.map((post) => (
        <Post
          key={post._id}
          canDelete={user.userId === post.user._id}
          post={post}
        />
      ))}
    </>
  );
}

export default PostList;
