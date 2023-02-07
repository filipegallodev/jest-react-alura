import { useSetRecoilState } from "recoil";
import listaParticipantesState from "../atom";

const useAdicionarParticipante = () => {
  const setLista = useSetRecoilState(listaParticipantesState);
  return (nomeDoParticipante: string) => {
    return setLista((listaAtual) => [...listaAtual, nomeDoParticipante]);
  };
};

export default useAdicionarParticipante;
