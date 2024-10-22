import { api } from '@/src/common/utils/HttpClient';
import { useEffect, useState } from 'react';

export function Posts() {
  type ArticleData = {
    id: number;
    attributes: {
      [name: string]: string,
    }
  };

  const [articles, setArticles] = useState<ArticleData[]>([]);

  useEffect(() => {
    async function fetchData() {
      const responseData = await api.get('/posts');
      setArticles(responseData.data.data);
    }

    fetchData();
  }, []);

  return (
    <div className="posts">
      Posts
      {articles.map((el) => <div key={el.id}>{el.id}</div>)}
    </div>
  );
}
