// styled components
import styled from "styled-components";
import { Container, TituloPagina, Cartao } from "../../assets/css/UI";

const CartaoPost = styled(Cartao)`
margin-top: 1.25rem;
`;

const CartaoTitulo = styled.h2`
font-size: var(--fonte-tamanho-cartao-titulo);
margin-bottom: 1rem;
`;

const CartaoTexto = styled.p`
line-height: 1.2rem;
`;

const Home = () => {
  return (
    <main>
      <Container>
        <TituloPagina>Pet notícias</TituloPagina>
      </Container>
      <section className="container flex--centro">
        <CartaoPost>
          <CartaoTitulo>Banho no cão</CartaoTitulo>
          <CartaoTexto>A maioria dos cães prefere pular a hora do banho, mas o banho desempenha um papel importante na saúde do pelo e da pele do seu cão, ajudando a mantê-lo limpo e livre de sujeira e parasitas. Ter os produtos certos pode ajudá-lo a se sentir mais confortável.</CartaoTexto>
        </CartaoPost>
      </section>

    </main>
  );
};

export default Home;
