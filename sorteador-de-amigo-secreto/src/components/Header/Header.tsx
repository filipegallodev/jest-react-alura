import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <div
        className="imagem-logo"
        role="img"
        aria-label="Logo do Sorteador"
      ></div>
      <img
        className="participante"
        src="/images/participante.png"
        alt="Participante com um presente na mão"
      />
    </header>
  );
};

export default Header;
