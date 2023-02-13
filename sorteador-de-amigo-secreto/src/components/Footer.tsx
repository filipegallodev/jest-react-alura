import React from "react";
import { useNavigate } from "react-router-dom";
import { useListaDeParticipantes } from "../state/hooks/useListaDeParticipantes";

import "./Footer.css";

const Footer = () => {
  const participantes = useListaDeParticipantes();

  const navigate = useNavigate();

  function iniciar() {
    navigate("/sorteio");
  }

  return (
    <footer className="rodape-configuracoes">
      <button
        className="botao"
        disabled={participantes ? participantes.length < 3 : true}
        onClick={iniciar}
      >
        Iniciar brincadeira
      </button>
      <img src="/public/imagens/sacolas.png" alt="Sacolas de compras" />
    </footer>
  );
};

export default Footer;
