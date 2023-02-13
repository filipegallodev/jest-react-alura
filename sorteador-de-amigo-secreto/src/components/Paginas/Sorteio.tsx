import React from "react";
import { useListaDeParticipantes } from "../../state/hooks/useListaDeParticipantes";

const Sorteio = () => {
  const participantes = useListaDeParticipantes();

  return (
    <section>
      <form>
        <select name="participante-da-vez" id="participante-da-vez">
          {participantes.map((participante) => (
            <option key={participante}>{participante}</option>
          ))}
        </select>
      </form>
    </section>
  );
};

export default Sorteio;
