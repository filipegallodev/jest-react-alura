import React from "react";
import Card from "../Card/Card";
import Footer from "../Footer";
import Formulario from "../Formulario";
import ListaParticipantes from "../ListaParticipantes";

const Configuracao = () => {
  return (
    <Card>
      <section>
        <h2>Vamos começar!</h2>
        <Formulario />
        <ListaParticipantes />
        <Footer />
      </section>
    </Card>
  );
};

export default Configuracao;
