import React from "react";
// import logo from "C:/Users/charl/Documents/ADA/Projet_Collectif/Hello_Ada/Hello_Ada_Front/Hello_Ada_front/assets/hello ada.jpg";

function Header() {
  return (
    <header className="bg-[#f7c9cd] mt-1 flex items-center p-4">
      <img
        src= "https://raw.githubusercontent.com/gracejudic/Hello_Ada_front/refs/heads/header/assets/hello%20ada.jpg"
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
