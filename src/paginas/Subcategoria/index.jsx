import { useParams } from 'react-router-dom';

import ListaPost from '../../components/ListaPost';

const Subcategoria = () => {
    const { subcategoria } = useParams();

    return (
        <ListaPost url={`/posts?subcategoria=${subcategoria}`} />
    );
};

export default Subcategoria;