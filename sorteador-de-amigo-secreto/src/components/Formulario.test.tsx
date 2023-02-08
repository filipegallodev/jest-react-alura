import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import Formulario from "./Formulario";
import { RecoilRoot } from "recoil";

test("Quando o input está vazio, novos participantes não podem ser adicionados", () => {
  render(
    <RecoilRoot>
      <Formulario />
    </RecoilRoot>
  );
  const input = screen.getByPlaceholderText(
    "Insira os nomes dos participantes"
  );
  const button = screen.getByRole("button");
  expect(input).toBeInTheDocument();
  expect(button).toBeDisabled();
});

test("Adicionar um participante caso exista um nome preenchido", () => {
  render(
    <RecoilRoot>
      <Formulario />
    </RecoilRoot>
  );
  const input = screen.getByPlaceholderText(
    "Insira os nomes dos participantes"
  );
  const button = screen.getByRole("button");
  fireEvent.change(input, {
    target: {
      value: "Filipe",
    },
  });
  fireEvent.click(button);
  expect(input).toHaveFocus();
  expect(input).toHaveValue("");
});

test("Nomes duplicados não podem ser adicionados na lista", () => {
  render(
    <RecoilRoot>
      <Formulario />
    </RecoilRoot>
  );
  const input = screen.getByPlaceholderText(
    "Insira os nomes dos participantes"
  );
  const button = screen.getByRole("button");
  fireEvent.change(input, {
    target: {
      value: "Filipe",
    },
  });
  fireEvent.click(button);
  fireEvent.change(input, {
    target: {
      value: "Filipe",
    },
  });
  fireEvent.click(button);
  const mensagemDeErro = screen.getByRole("alert");
  expect(mensagemDeErro.textContent).toBe(
    "Nomes duplicados não são permitidos!"
  );
});
