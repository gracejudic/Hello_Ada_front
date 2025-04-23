import { useParams } from 'react-router-dom';
import useFetch from './useFetch';

const UserDetails = () => {
    const { id } = useParams();
    const { data: user, error, isPending } = useFetch("http://localhost:8080/api/users/" + id);

    return (
        <>
    <div className="max-w-2xl mx-auto p-6">
      {isPending && <p className="text-gray-600">Loading user details...</p>}
      {error && <p className="text-red-500">{error}</p>}
      {user && (
        <div className="flex items-start gap-6">

          <div className="flex-shrink-0">
            <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-gray-300">
                <img src={user.profilPicture} alt={`${user.username}'s profile`} className="w-full h-full object-cover"/>
            </div>
          </div>

          <div className="flex-grow">
            <div className="flex items-center gap-3 mb-4">
              <div className="border border-gray-300 px-4 py-2">
                <h2 className="font-medium">{user.username}</h2>
              </div>

              <div className="border border-gray-300 px-4 py-2">
                <p className="text-gray-700">
                  Nombre de publications: {user.publicationCount || 0}
                </p>
              </div>
            </div>

            <div className="border border-gray-300 p-4 mb-4 w-full">
              <p className="text-gray-700">
                {user.description || "No description available"}
              </p>
            </div>
            
            <button className="border border-gray-300 px-4 py-2 hover:bg-gray-100 transition duration-200">
              Modifier le profil
            </button>
          </div>
        </div>
      )}
    </div>
    </>
  );
};

export default UserDetails;