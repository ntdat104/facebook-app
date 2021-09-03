import Post from './Post';
import Sender from './Sender';
import Stories from './Stories';

function Content() {
  return (
    <div className='pt-6 mb-20 w-content-middle'>
      <Stories />
      <Sender />
      <Post />
    </div>
  );
}

export default Content;
