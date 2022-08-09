// styled components
// import styled from "styled-components";
import { Container, TituloPagina, /*Cartao*/ } from "../../assets/css/UI";

import ListaPost from "../../components/ListaPost";

// const CartaoPost = styled(Cartao)`
// margin-top: 1.25rem;
// `;

// const CartaoTitulo = styled.h2`
// font-size: var(--fonte-tamanho-cartao-titulo);
// margin-bottom: 1rem;
// `;

// const CartaoTexto = styled.p`
// line-height: 1.2rem;
// `;

const Home = () => {
  return (
    <main>
      <Container>
        <TituloPagina>Pet notícias</TituloPagina>
      </Container>
      {/* O /posts vem da url do json-server */}
      <ListaPost url={'/posts'} />
    </main>
  );
};

export default Home;
