import { realizarSorteio } from "./realizarSorteio";

export {};

describe("Dado um sorteio e amigo secreto", () => {
  test("Cada participante não sorteie o próprio nome", () => {
    const participantes = ["Ana", "Pedro", "João", "Mariana", "José", "Júlia"];
    const sorteio = realizarSorteio(participantes);
    participantes.forEach((participante) => {
      const amigoSecreto = sorteio.get(participante);
      expect(amigoSecreto).not.toEqual(participante);
    });
  });
});
