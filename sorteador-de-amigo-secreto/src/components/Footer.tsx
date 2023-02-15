import React from "react";
import { useNavigate } from "react-router-dom";
import { useListaDeParticipantes } from "../state/hooks/useListaDeParticipantes";
import { useSorteador } from "../state/hooks/useSorteador";

import "./Footer.css";

const Footer = () => {
  const participantes = useListaDeParticipantes();
  const navigate = useNavigate();
  const sortear = useSorteador();

  function iniciar() {
    sortear();
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
      <img src="/images/sacolas.png" alt="Sacolas de compras" />
    </footer>
  );
};

export default Footer;
