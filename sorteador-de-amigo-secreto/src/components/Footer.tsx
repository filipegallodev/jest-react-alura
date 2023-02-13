import React from "react";
import { useNavigate } from "react-router-dom";
import { useListaDeParticipantes } from "../state/hooks/useListaDeParticipantes";

const Footer = () => {
  const participantes = useListaDeParticipantes();

  const navigate = useNavigate();

  function iniciar() {
    navigate("/sorteio");
  }

  return (
    <footer>
      <button
        disabled={participantes ? participantes.length < 3 : true}
        onClick={iniciar}
      >
        Iniciar brincadeira
      </button>
    </footer>
  );
};

export default Footer;
