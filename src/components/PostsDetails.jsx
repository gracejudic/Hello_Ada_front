import { useParams } from 'react-router-dom';
import useFetch from './useFetch';

const PostsDetails = () => {
  const { id } = useParams();
  const { data: posts } = useFetch(`http://localhost:8080/api/posts/user/` + id);

  return (
    <div className="max-w-2xl mx-auto p-6">
      <table className="w-full border-collapse">
        <tbody>
          {posts && posts.map((post) => (
            <tr key={post.postTitle} className="border-b">
              <td className="p-2">
                <p>{post.content}</p>
              </td>
              <td className="p-2">
                <p src={post.postPicture} alt={post.postTitle} className="w-32 h-auto" />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PostsDetails;
