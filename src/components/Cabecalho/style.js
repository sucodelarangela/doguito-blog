import styled from 'styled-components';
import '../../assets/css/componentes/cabecalho.css';
import { corContrasteClaro, fontePesoMenuCabecalhoItem, fonteTamanhoMenuCabecalhoItem, sombra } from '../../assets/css/UI/variaveis';

export const Header = styled.header`
background-color: ${corContrasteClaro};
border-radius: 0 0 10px 10px;
box-shadow: ${sombra};
display: grid;
grid-template-columns: 1fr 1fr 1fr;
align-items: center;
height: 4.75rem;

@media screen and (min-width: 900px) {
    grid-template-areas: 'menu logo .';
    height: 6.75rem;
}
`;

export const MenuHamburguer = styled.div`
width: 1.5rem;
height: 0.75rem;
transition: 0.2s;
@media screen and (min-width: 900px) {
    display: none;
}
`;

export const HeaderContainer = styled.div`
@media screen and (min-width: 900px) {
    grid-area: logo;
}
`;

export const HeaderMenu = styled.nav`
position: fixed;
left: -100vw;
top: 0;
background-color: ${corContrasteClaro};
width: 70vw;
height: 100vh;
box-sizing: border-box;
font-size: ${fonteTamanhoMenuCabecalhoItem};
font-weight: ${fontePesoMenuCabecalhoItem};
z-index: 10;
transition: 0.25s;
@media screen and (min-width: 900px) {
    justify-self: flex-start;
    position: static;
    width: fit-content;
    height: fit-content;
    grid-area: menu;
}
`;

export const MenuBackground = styled.div`
background-color: #00000020;
position: fixed;
top: 0;
left: -100vw;
width: 100vw;
height: 100vh;
@media screen and (min-width: 900px) {
    display: none;
}
`;
