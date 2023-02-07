import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import Formulario from "./Formulario";

test("Quando o input está vazio, novos participantes não podem ser adicionados", () => {
  render(<Formulario />);
  const input = screen.getByPlaceholderText(
    "Insira os nomes dos participantes"
  );
  const button = screen.getByRole("button");
  expect(input).toBeInTheDocument();
  expect(button).toBeDisabled();
});

test("Adicionar um participante caso exista um nome preenchido", () => {
  render(<Formulario />);
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
