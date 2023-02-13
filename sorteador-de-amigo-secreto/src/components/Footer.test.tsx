import { render, screen } from "@testing-library/react";
import React from "react";
import { RecoilRoot } from "recoil";
import Footer from "./Footer";

describe("Onde não existem participantes suficientes", () => {
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
