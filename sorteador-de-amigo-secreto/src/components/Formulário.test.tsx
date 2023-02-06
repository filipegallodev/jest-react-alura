import { render, screen } from "@testing-library/react";
import React from "react";

test("quando o input está vazio, novos participantes não podem ser adicionados", () => {
  render(<Formulario />);

  const input = screen.getByPlaceholderText(
    "Insira os nomes dos participantes"
  );
  const button = screen.getByRole("button");

  expect(input).toBeInTheDocument();
  expect(button).toBeDisabled();
});
