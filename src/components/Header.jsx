import React from "react";

function Header() {
  return (
    <header className="bg-rose-100 shadow-md">
      <div className="max-w-25xl mx-auto p-6 flex flex-col md:flex-row items-center justify-between">
        <div className="mb-4 md:mb-0 text-center md:text-left">
          <h1 className="text-3xl font-bold text-rose-600 tracking-wide">
            Hello<span className="text-rose-500">, Ada!</span>
          </h1>
          <p className="text-rose-400 text-sm">Le blog qui parle de tech</p>
        </div>
        
        <div className="flex gap-x-9 mt-4 md:mt-0">
          <button className="py-2 px-6 bg-white border-2 border-rose-600 text-rose-600 hover:bg-rose-50 font-semibold rounded-lg transition-colors">
            Créer un post
          </button>
          <button className="py-2 px-6 bg-rose-600 hover:bg-rose-500 text-white font-semibold rounded-lg transition-colors shadow-md">
            Connexion
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;