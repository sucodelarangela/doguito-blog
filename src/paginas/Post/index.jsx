import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { busca } from '../../api/api';

import { CartaoPost, CartaoTexto, CartaoTitulo } from "./styles";

const Post = () => {
    let navigate = useNavigate();
    const { id } = useParams();
    const [post, setPost] = useState({});

    useEffect(() => {
        busca(`/posts/${id}`, setPost)
            .catch(() => {
                // se a rota não for encontrada, redireciona para a página 404
                navigate('/404', { replace: true });
            });
    }, [id]);

    return (
        <main className="container flex--centro">
            <CartaoPost>
                <CartaoTitulo>{post.title}</CartaoTitulo>
                <CartaoTexto>{post.body}</CartaoTexto>
            </CartaoPost>
        </main>
    );
};

export default Post;