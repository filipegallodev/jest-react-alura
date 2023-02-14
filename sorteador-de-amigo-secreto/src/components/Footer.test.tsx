import React from "react";
import Footer from "./Footer";
import { RecoilRoot } from "recoil";
import { fireEvent, render, screen } from "@testing-library/react";
import { useListaDeParticipantes } from "../state/hooks/useListaDeParticipantes";

jest.mock("../state/hooks/useListaDeParticipantes", () => {
  return {
    useListaDeParticipantes: jest.fn(),
  };
});

const mockNavigate = jest.fn();
const mockSorteio = jest.fn();

jest.mock("react-router-dom", () => {
  return {
    useNavigate: () => mockNavigate,
  };
});

jest.mock("../state/hooks/useSorteador", () => {
  return {
    useSorteador: () => mockSorteio,
  };
});

describe("Quando não existem participantes suficientes", () => {
  test("A brincadeira não pode ser iniciada", () => {
    render(
      <RecoilRoot>
        <Footer />
      </RecoilRoot>
    );
    const button = screen.getByRole("button");
    expect(button).toBeDisabled();
  });
});

describe("Quando existem participantes suficientes", () => {
  beforeEach(() => {
    (useListaDeParticipantes as jest.Mock).mockReturnValue([
      "Ana",
      "Catarina",
      "José",
    ]);
  });

  test("A brincadeira pode ser iniciada", () => {
    render(
      <RecoilRoot>
        <Footer />
      </RecoilRoot>
    );
    const button = screen.getByRole("button");
    expect(button).not.toBeDisabled();
  });

  test("A brincadeira foi iniciada", () => {
    render(
      <RecoilRoot>
        <Footer />
      </RecoilRoot>
    );
    const button = screen.getByRole("button");
    fireEvent.click(button);
    expect(mockNavigate).toHaveBeenCalledTimes(1);
    expect(mockNavigate).toHaveBeenCalledWith("/sorteio");
    expect(mockSorteio).toHaveBeenCalledTimes(1);
  });
});
