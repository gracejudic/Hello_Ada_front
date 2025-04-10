import React from "react";
import logo from "C:/Users/charl/Documents/ADA/Projet_Collectif/Hello_Ada/Hello_Ada_Front/Hello_Ada_front/assets/hello ada.jpg";

function Header() {
  return (
    <header className="bg-rose-100 mt-1 flex items-center p-4">
      <img
        src={logo}
        alt="Logo"
        className="h-20 w-auto ml-4"
      />
      <button className="bg-rose-500 hover:bg-rose-600 text-white font-bold py-2 px-10 items-left p-4">
        Connexion
      </button>
    </header>
  );
}

export default Header;
