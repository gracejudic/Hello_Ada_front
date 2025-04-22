import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";


function User() {
  const [user, setUser] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:8080/api/users`)
      .then(response => response.json())
      .then(data => {
        setUser(data);
      })
      .catch(error => console.error("Erreur lors du chargement du JSON:", error));
  }, []);

  return (
    <div>
      <h1>Profil</h1>
      {user.length > 0 ? (
        user.map((userDetails) => (
          <div key={userDetails.username}>
            <h3>{userDetails.description}</h3>
            <img>{userDetails.profilPicture}</img>
            <br/>
          </div>
        ))
      ) : (
        <p>Chargement du profil...</p>
      )}
    </div>
  );
}

export default User;