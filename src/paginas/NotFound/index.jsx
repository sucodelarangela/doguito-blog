import image from '../../assets/img/doguito404.svg';

import styled from 'styled-components';
import { fonteTamanhoNotFoundTexto } from '../../assets/css/UI/variaveis';

const Imagem404 = styled.img`
width: 100%;
max-width: 25rem;
margin-top: 1.25rem;
margin-bottom: 2rem;
`;

const Texto404 = styled.p`
font-size: ${fonteTamanhoNotFoundTexto};
margin-bottom: 1rem;
`;

const NotFound = () => {
    return (
        <main className='container flex--centro flex--coluna'>
            <Imagem404 src={image} alt="Erro 404" />
            <Texto404>Ops, essa página não existe!</Texto404>
        </main>
    );
};

export default NotFound;