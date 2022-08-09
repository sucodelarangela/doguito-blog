import { Container, TituloPagina, Cartao } from '../../assets/css/UI';

const Sobre = () => {

  return (
    <main>
      <Container>
        <TituloPagina>Sobre Doguito</TituloPagina>
      </Container>
      <section className="container flex--centro">
        <Cartao>
          O blog do doguito foi criado para tirar diversas dúvidas sobre o mundo pet!!!
        </Cartao>
      </section>
    </main>
  );
};

export default Sobre;
