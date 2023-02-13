import React from "react";
import { useListaDeParticipantes } from "../state/hooks/useListaDeParticipantes";

const Footer = () => {
  const participantes = useListaDeParticipantes();

  return (
    <footer>
      <button disabled={participantes.length < 3}>Iniciar brincadeira</button>
    </footer>
  );
};

export default Footer;
