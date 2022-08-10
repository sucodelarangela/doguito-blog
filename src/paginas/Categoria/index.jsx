import { useEffect, useState } from 'react';
import { Link, Route, Routes, useParams } from 'react-router-dom';
import { busca } from '../../api/api';

import styled from 'styled-components';
import { corContrasteClaro, fontePesoCategorias } from '../../assets/css/UI/variaveis';

import { Container, TituloPagina } from '../../assets/css/UI';

import ListaCategorias from '../../components/ListaCategorias';
import { Categorias } from '../../components/ListaCategorias/styles';
import ListaPost from '../../components/ListaPost';
import Subcategoria from '../Subcategoria';

const SubcategoriaLista = styled.li`
    font-weight: ${fontePesoCategorias};
    background-color: ${corContrasteClaro};
    border-radius: 3rem;
    padding: 1rem;
`;

const Categoria = () => {
    const { id } = useParams();
    const [subcategorias, setSubcategorias] = useState([]);

    useEffect(() => {
        busca(`/categorias/${id}`, (categoria) => {
            setSubcategorias(categoria.subcategorias);
        });
    }, [id]);

    return (
        <>
            <Container>
                <TituloPagina>Pet Notícias</TituloPagina>
            </Container>

            <ListaCategorias />
            <Categorias className='container'>
                {
                    subcategorias.map((subcategoria) => (
                        <Link to={`${subcategoria}`} key={subcategoria}>
                            <SubcategoriaLista className={`lista-categorias__categoria--${id}`}>
                                {subcategoria}
                            </SubcategoriaLista>
                        </Link>
                    ))
                }
            </Categorias>

            <Routes>
                {/* Buscando os posts específicos de cada categoria usando o caminho atual da url (index) */}
                <Route index element={<ListaPost url={`/posts?categoria=${id}`} />} />
                {/* renderizando os posts das subcategorias */}
                <Route path=':subcategoria' element={<Subcategoria />} />
            </Routes>
        </>
    );
};

export default Categoria;