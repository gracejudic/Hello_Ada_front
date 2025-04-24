import { useParams } from 'react-router-dom';
import useFetch from './useFetch';
import { useNavigate } from 'react-router-dom';

const UserDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { data: user, error, isPending } = useFetch("http://localhost:8080/api/users/" + id);

  const handleEditClick = () => {
    navigate(`/users/${id}/updateProfile`);
  };

  return (
    <div className="max-w-2xl mx-auto p-4">
      {isPending && <p className="text-gray-600">Loading user details...</p>}
      {error && <p className="text-red-500">{error}</p>}

      {user && (
        <div className="space-y-4">

          <div className="flex items-center gap-4">

            <div className="w-20 h-20 rounded-full overflow-hidden border border-gray-300 flex-shrink-0">
              <img
                src={user.profilPicture}
                alt={`${user.username}'s profile`}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="flex flex-col gap-1">
              <p className="font-semibold text-lg">@{user.username}</p>
              <p className="text-gray-600 text-sm">Publications : {user.publicationCount || 0}</p>
            </div>
          </div>

          <div className="border border-gray-300 p-3">
            <p className="text-gray-700">{user.description || "No description available"}</p>
          </div>

          <button onClick={handleEditClick} className="py-1 px-3 bg-rose-600 hover:bg-rose-600 text-white font-bold rounded">
            Modifier le profil
          </button>

        </div>
      )}
    </div>
  );
} 

export default UserDetails;