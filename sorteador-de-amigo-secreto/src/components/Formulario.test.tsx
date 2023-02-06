import React from "react";
import { render, screen } from "@testing-library/react";
import Formulario from "./Formulario";

test("quando o input está vazio, novos participantes não podem ser adicionados", () => {
  render(<Formulario />);

  const input = screen.getByPlaceholderText(
    "Insira os nomes dos participantes"
  );
  const button = screen.getByRole("button");

  expect(input).toBeInTheDocument();
  expect(button).toBeDisabled();
});
