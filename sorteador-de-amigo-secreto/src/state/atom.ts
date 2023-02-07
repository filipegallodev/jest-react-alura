import { atom } from "recoil";

const listaParticipantesState = atom<string[]>({
  key: "listaParticipantesState",
  default: [],
});

export default listaParticipantesState;
