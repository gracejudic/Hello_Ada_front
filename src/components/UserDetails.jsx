import { useParams } from 'react-router-dom';
import useFetch from './useFetch';

const UserDetails = () => {
    const { id } = useParams();
    const { data: user, error, isPending } = useFetch("http://localhost:8080/api/users/" + id);

    return (
        <>
            <section>
                {isPending && <p>Loading user details...</p>}

                {error && <p>{error}</p>}

                {user && (
                    <>
                        <h1>User {user.username} details</h1>
                        <h2>{user.description}</h2>
                        <img src= {user.profilPicture}/>
                    </>
                )}
            </section>
        </>
    );
};

export default UserDetails;