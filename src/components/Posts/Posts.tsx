import { api } from '@/src/common/utils/HttpClient';
import { useEffect } from 'react';

export function Posts() {
  useEffect(() => {
    console.log('before fetch data');

    async function fetchData() {
      const responseData = api.get('/posts');
      console.log('responseData:', responseData);
      console.log('after fetch data');
    }

    fetchData();
  }, []);

  return (
    <div className="posts">
      Posts
    </div>
  );
}
