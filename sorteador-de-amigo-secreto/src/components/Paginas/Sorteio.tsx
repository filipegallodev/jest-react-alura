import React, { useState } from "react";
import { useListaDeParticipantes } from "../../state/hooks/useListaDeParticipantes";
import { useResultadoSorteio } from "../../state/hooks/useResultadoSorteio";

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
    <section>
      <form onSubmit={sortear}>
        <select
          required
          name="participante-da-vez"
          id="participante-da-vez"
          placeholder="Selecione o seu nome"
          value={participanteDaVez}
          onChange={({ target }) => setParticipanteDaVez(target.value)}
        >
          {participantes.map((participante) => (
            <option key={participante}>{participante}</option>
          ))}
        </select>
        <button>Sortear</button>
      </form>
      {amigoSecreto && <p role="alert">{amigoSecreto}</p>}
    </section>
  );
};

export default Sorteio;
