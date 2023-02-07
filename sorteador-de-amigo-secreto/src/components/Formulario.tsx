import React, { useState, useRef } from "react";
import useAdicionarParticipante from "../state/hooks/useAdicionarParticipante";

const Formulario = () => {
  const [nome, setNome] = useState<string>("");
  const inputRef = useRef<HTMLInputElement>(null);
  const adicionarNaLista = useAdicionarParticipante();

  function adicionarParticipante(e: React.FormEvent) {
    e.preventDefault();
    adicionarNaLista(nome);
    setNome("");
    inputRef.current?.focus();
  }

  return (
    <form onSubmit={adicionarParticipante}>
      <input
        autoFocus
        ref={inputRef}
        type="text"
        value={nome}
        onChange={({ target }) => setNome(target.value)}
        placeholder="Insira os nomes dos participantes"
      />
      <button disabled={!nome}>Adicionar</button>
    </form>
  );
};

export default Formulario;
