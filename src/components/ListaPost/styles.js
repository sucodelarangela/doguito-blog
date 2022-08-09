import styled from "styled-components";
import { corContrasteEscuro, fontePesoCartao, fonteTamanhoCartaoPostTitulo } from "../../assets/css/UI/variaveis";

export const Posts = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    @media screen and (min-width: 900px) {
        align-items: stretch;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-evenly;
    }
    `;

export const PostTitulo = styled.h3`
    font-size: ${fonteTamanhoCartaoPostTitulo};
    font-weight: ${fontePesoCartao};
    margin-bottom: 1rem;
    color: ${corContrasteEscuro};
    `;

export const PostMeta = styled.p`
    color: ${corContrasteEscuro};   
    line-height: 1.3rem;
`;