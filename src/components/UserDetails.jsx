import { useParams, useNavigate } from 'react-router-dom';
import useFetch from './useFetch';

const UserDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { data: user, error, isPending } = useFetch("http://localhost:8080/api/users/" + id);

  const handleEditClick = () => {
    navigate(`/users/${id}/updateProfile`);
  };

  return (
    <div className="mt-25 ml-20 p-10 w-full md:w-[700px] bg-white rounded-xl shadow-md text-lg">
      {isPending && <p className="text-gray-600">Chargement des infos utilisateur...</p>}
      {error && <p className="text-red-500">{error}</p>}

      {user && (
        <div className="space-y-10">
          {/* Header avec image et infos */}
          <div className="flex items-center gap-6">
            <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-rose-500 shadow">
              <img
                src={user.profilPicture}
                alt={`${user.username}'s profile`}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex flex-col">
              <p className="text-xl font-bold text-gray-800">@{user.username}</p>
              <p className="text-gray-600 text-sm">Publications : {user.publicationCount || 0}</p>
            </div>
          </div>

          {/* Description */}
          <div className="bg-white border-l-4 border-rose-500 p-6 rounded-xl shadow-sm">
            <h3 className="text-lg font-semibold text-rose-600 mb-2">À propos</h3>
            <p className="whitespace-pre-line text-gray-700 leading-relaxed">
              {user.description || "Aucune description disponible."}
            </p>
          </div>

          {/* Bouton */}
          <button
            onClick={handleEditClick}
            className="py-2 px-6 bg-rose-600 hover:bg-rose-700 text-white font-semibold rounded-lg shadow transition-all"
          >
            Modifier le profil
          </button>
        </div>
      )}
    </div>
  );
};

export default UserDetails;
