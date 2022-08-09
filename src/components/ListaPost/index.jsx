// importando função de busca da api do axios
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { busca } from '../../api/api';
import { PostMeta, Posts, PostTitulo } from './styles';

const ListaPost = ({ url }) => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        busca(url, setPosts);
    }, [url]);

    return (
        <Posts className='container'>
            {
                posts.map((post) => {
                    return (
                        <Link to={`/posts/${post.id}`} key={post.id} className={`cartao-post cartao-post--${post.categoria}`}>
                            <article>
                                <PostTitulo>{post.title}</PostTitulo>
                                <PostMeta>{post.metadescription}</PostMeta>
                            </article>
                        </Link>);
                })
            }
        </Posts>
    );
};

export default ListaPost;