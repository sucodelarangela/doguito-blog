// global styled components
import styled from "styled-components";
import { corContrasteClaro, sombra, fonteFamiliaTituloPagina, fonteTamanhoTituloPagina } from "./variaveis";

export const Container = styled.div`
padding-right: 1rem;
padding-left: 1rem;
`;

export const Cartao = styled.article`
background-color: ${corContrasteClaro};
border-radius: 10px;
box-shadow: ${sombra};
width: 100%;
max-width: 45rem;
padding: 1.75rem;
box-sizing: border-box;
margin-bottom: 1rem;
`;

export const TituloPagina = styled.h2`
display: flex;
align-items: center;
font-family: ${fonteFamiliaTituloPagina};
font-size: ${fonteTamanhoTituloPagina};
background-color: ${corContrasteClaro};
border-radius: 10px;
box-shadow: ${sombra};
height: 4.75rem;
margin-top: 1.25rem;
margin-bottom: 2rem;
padding-left: 2rem;
`;