import React from 'react';
import { useParams } from 'react-router-dom';

import { Container, TituloPagina } from '../../assets/css/UI';

import ListaCategorias from '../../components/ListaCategorias';
import ListaPost from '../../components/ListaPost';

const Categoria = () => {
    const { id } = useParams();
    return (
        <>
            <Container>
                <TituloPagina>Pet Notícias</TituloPagina>
            </Container>

            <ListaCategorias />

            <ListaPost url={`/posts?categoria=${id}`} />
        </>
    );
};

export default Categoria;