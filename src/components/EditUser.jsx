import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const EditUser = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [form, setForm] = useState({ username: '', description: '', profilPicture: '' });
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:8080/api/users/${id}`)
      .then(res => {
        if (!res.ok) throw Error('Failed to fetch user');
        return res.json();
      })
      .then(data => {
        setUser(data);
        setForm({
          username: data.username || '',
          description: data.description || '',
          profilPicture: data.profilPicture || ''
        });
      })
      .catch(err => setError(err.message));
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(`http://localhost:8080/api/users/${id}/updateProfile`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form)
    })
      .then(res => {
        if (!res.ok) throw Error('Failed to update user');
        navigate(`/users/${id}`);
      })
      .catch(err => setError(err.message));
  };

  if (error) return <p className="text-red-500">{error}</p>;
  if (!user) return <p className="text-gray-600">Loading...</p>;

  return (
    <div className="max-w-xl mx-auto p-4">
      <h2 className="text-xl font-semibold text-rose-600 mb-4">Modifier le profil</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block mb-1 text-sm font-semibold text-rose-600">Nom d'utilisateur</label>
          <input
            type="text"
            name="username"
            value={form.username}
            onChange={handleChange}
            className="w-full border px-3 py-2 rounded"
            required
          />
        </div>
        <div>
          <label className="block mb-1 text-sm font-semibold text-rose-600">Description</label>
          <textarea
            name="description"
            value={form.description}
            onChange={handleChange}
            className="w-full border px-3 py-6 rounded"
          />
        </div>
        <div>
          <label className="block mb-1 text-sm font-semibold text-rose-600">URL de la photo de profil</label>
          <input
            type="text"
            name="profilPicture"
            value={form.profilPicture}
            onChange={handleChange}
            className="w-full border px-3 py-1 rounded"
          />
        </div>
        <button type="submit" className="py-1 px-2 bg-rose-600 hover:bg-rose-600 text-white font-bold rounded">
          Enregistrer les modifications
        </button>
      </form>
    </div>
  );
};

export default EditUser;