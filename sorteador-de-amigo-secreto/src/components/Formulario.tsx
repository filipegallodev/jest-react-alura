import React, { useState } from "react";

const Formulario = () => {
  const [participante, setParticipante] = useState<string>();

  return (
    <form>
      <input
        type="text"
        value={participante}
        onChange={({ target }) => setParticipante(target.value)}
        placeholder="Insira os nomes dos participantes"
      />
      <button disabled={participante ? false : true}>Adicionar</button>
    </form>
  );
};

export default Formulario;
