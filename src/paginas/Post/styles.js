import styled from "styled-components";
import { Cartao } from "../../assets/css/UI";
import { fonteTamanhoCartaoTitulo } from "../../assets/css/UI/variaveis";

export const CartaoPost = styled(Cartao)`
margin-top: 1.25rem;
`;

export const CartaoTitulo = styled.h2`
font-size: ${fonteTamanhoCartaoTitulo};
margin-bottom: 1rem;
`;

export const CartaoTexto = styled.p`
line-height: 1.2rem;
`;