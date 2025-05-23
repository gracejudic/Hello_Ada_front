import { useParams } from 'react-router-dom';
import useFetch from './useFetch';

const PostsDetails = () => {
  const { id } = useParams();
  const { data: posts } = useFetch(`http://localhost:8080/api/posts/user/` + id);

  return (
    <main className=" min-h-screen p-6 flex flex-col">
      <h1 className="text-3xl font-bold text-center text-rose-700 mb-10">✨ Les derniers posts ✨</h1>
        <div className="flex justify-center w-full">
          <div className="w-full max-w-2xl space-y-5 ">
          {posts && posts.map((post) => (
            <div key={post.id} className="bg-white rounded-2xl shadow-lg p-6 flex flex-col space-y-4">
              {/* Image du post */}
              <img
                src={post.postPicture}
                alt={post.postTitle}
                className="w-full h-100 object-contain"
              />
              
              {/* Titre du post */}
              <h2 className="text-xl font-semibold text-rose-600">{post.postTitle}</h2>
              
              {/* Contenu du post */}
              <p className="whitespace-pre-line text-gray-700">{post.content}</p>
              
              {/* Infos user */}
              {/* <div className="flex items-center space-x-4 mt-4">
                <img
                  src={post.user.profilPicture}
                  alt={post.user.username}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <p className="font-medium">@{post.user.username}</p>
                  {post.user.description && (
                    <p className="text-sm text-gray-500">{post.user.description}</p>
                  )}
                </div>
              </div> */}

              {/* Footer de carte */}
              <div className="flex justify-between text-sm text-gray-500 pt-2 border-t">
                <span>❤️ {post.likes} likes</span>
                <span>{new Date(post.createdAt).toLocaleDateString("fr-FR", {
                  weekday: "short",
                  day: "numeric",
                  month: "long",
                })}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default PostsDetails;