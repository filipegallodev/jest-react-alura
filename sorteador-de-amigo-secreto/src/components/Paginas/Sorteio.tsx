import React, { useState } from "react";
import { useListaDeParticipantes } from "../../state/hooks/useListaDeParticipantes";
import { useResultadoSorteio } from "../../state/hooks/useResultadoSorteio";
import Card from "../Card/Card";

import "./Sorteio.css";

const Sorteio = () => {
  const [participanteDaVez, setParticipanteDaVez] = useState("");
  const [amigoSecreto, setAmigoSecreto] = useState("");
  const participantes = useListaDeParticipantes();
  const resultado = useResultadoSorteio();

  function sortear(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (resultado && resultado.has(participanteDaVez))
      setAmigoSecreto(resultado.get(participanteDaVez)!);
  }

  return (
    <Card>
      <section className="sorteio">
        <form onSubmit={sortear}>
          <select
            required
            name="participante-da-vez"
            id="participante-da-vez"
            placeholder="Selecione o seu nome"
            value={participanteDaVez}
            onChange={({ target }) => setParticipanteDaVez(target.value)}
          >
            <option>Selecione seu nome</option>
            {participantes.map((participante) => (
              <option key={participante}>{participante}</option>
            ))}
          </select>
          <button className="botao-sortear">Sortear</button>
        </form>
        {amigoSecreto && (
          <p className="resultado" role="alert">
            {amigoSecreto}
          </p>
        )}
        <footer className="sorteio">
          <img
            className="aviao"
            src="/images/aviao.png"
            alt="Um desenho de um avião de papel"
          />
        </footer>
      </section>
    </Card>
  );
};

export default Sorteio;
