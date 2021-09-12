import PostList from './PostList';
import Sender from './Sender';
import Stories from './Stories';

function Content() {
  return (
    <div className='pt-6 mb-20 lg:w-content-middle'>
      <Stories />
      <Sender />
      <PostList />
    </div>
  );
}

export default Content;
