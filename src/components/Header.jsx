import React from "react";

function Header() {
  return (
    <header className="bg-rose-100 mt-1 p-8 ">
      <div className="max-w-1xl mx-auto flex flex-col md:flex-row items-center justify-between">
        <h1>Hello Ada </h1>
        {/* <img
          src="/assets/Hello, Ada !.png"
          alt="Logo"
          className="h-20 w-auto mb-4 md:mb-0"
        /> */}
        <div className="flex gap-x-4 ml-auto">
          <button className="py-2 px-6 bg-rose-600 hover:bg-rose-600 text-white font-bold rounded">
            Créer un post
          </button>
          <button className="py-2 px-6 bg-rose-600 hover:bg-rose-600 text-white font-bold rounded">
          Connexion
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
