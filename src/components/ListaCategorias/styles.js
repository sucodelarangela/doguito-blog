import styled from "styled-components";
import { corContrasteClaro, fontePesoCategorias } from "../../assets/css/UI/variaveis";

export const Categorias = styled.ul`
    display: flex;  
    width: 100%;
    box-sizing: border-box;
    justify-content: space-evenly;
    margin-bottom: 2rem;
`;

export const Categoria = styled.li`
    font-weight: ${fontePesoCategorias};
    background-color: ${corContrasteClaro};
    border-radius: 3rem;
    padding: 1rem;
`;