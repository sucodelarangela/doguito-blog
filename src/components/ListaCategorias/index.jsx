import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import { busca } from '../../api/api';

import { Categoria, Categorias } from "./styles";

const ListaCategorias = () => {
    const [categorias, setCategorias] = useState([]);

    useEffect(() => {
        busca(`/categorias`, setCategorias);
    }, []);

    return (
        <Categorias className="container">
            {
                categorias.map((categoria) => (
                    <Link to={`/categoria/${categoria.id}`} key={categoria.id}>
                        <Categoria className={`lista-categorias__categoria--${categoria.id}`}>
                            {categoria.nome}
                        </Categoria>
                    </Link>
                ))
            }
        </Categorias>
    );
};

export default ListaCategorias;