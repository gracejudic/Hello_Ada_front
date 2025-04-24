import React, { useEffect, useState } from "react";

function HomePage() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:8080/api/posts`)
            .then(response => response.json())
            .then(data => {
                console.log("Données récupérées :", data);
                setPosts(data)
            })
            .catch(error =>
                console.error("Erreur lors du chargement du JSON:", error)
            );
    }, [])

    return (
        <main className="bg-rose-100 min-h-screen p-6 flex flex-col">
            <h1 className="text-3xl bg-rose-600 font-bold text-center text-white mb-6 p-4">✨ Les derniers posts ✨</h1>
            
            {/* Conteneur principal en flex qui prend toute la hauteur restante */}
            <div className="flex justify-center w-full">
                {/* Grille centrée avec largeur maximale */}
                <div className="w-full max-w-2xl space-y-6">
                        {posts.map((post) => (
                        <div key={post.id} className="bg-white rounded-2xl shadow-lg p-6 space-y-9 ">
                            {/* Image du post */}
                            <img
                                src={post.postPicture}
                                alt={post.postTitle}
                                className="w-full h-55 object-fill rounded-lg"
                            />

                            {/* Titre du post */}
                            <h2 className="text-xl font-semibold text-rose-600">{post.postTitle}</h2>

                            {/* Contenu du post */}
                            <p className="whitespace-pre-line text-gray-700">{post.content}</p>

                            {/* Infos user */}
                            <div className="flex items-center space-x-4 mt-4">
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
                            </div>

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
}

export default HomePage