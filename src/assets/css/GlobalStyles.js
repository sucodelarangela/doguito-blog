import { createGlobalStyle } from "styled-components";
import { corContrasteClaro, corContrasteEscuro, corDivisao, corPrimaria, corSecundaria, fonteFamiliaCorpo, fonteFamiliaLogo, fontePesoMenuCabecalhoItem, fonteTamanhoLogo, fonteTamanhoMenuCabecalhoItem, sombra } from "./UI/variaveis";
import menuIcon from '../img/menu.svg';

export const GlobalStyle = createGlobalStyle`
* {
    box-sizing: border-box;
    font-family: ${fonteFamiliaCorpo};
    margin: 0;
    padding: 0;
    text-decoration: none;
	list-style: none;
}

body {
	background-color: ${corSecundaria};
	color: ${corContrasteEscuro};
	font-family: ${fonteFamiliaCorpo};
}

.container { 
	padding-right: 1rem;
	padding-left: 1rem;
}

.flex--centro {
	display: flex;
	align-items: center;
	justify-content: center;
}

.flex--coluna {
	display: flex;
	flex-direction: column;
}

.cabecalho {
    background-color: ${corContrasteClaro};
    border-radius: 0 0 10px 10px;
    box-shadow: ${sombra};
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    align-items: center;
    height: 4.75rem;
}

.menu-hamburguer {
    width: 1.5rem;
    height: 0.75rem;
    transition: 0.2s;
}

.menu-hamburguer--ativo .menu-hamburguer__icone {
    transform: rotate(90deg);
    transition: 0.2s;
}

.menu-hamburguer__icone {
    display: block;
    width: 100%;
    height: 100%;
    background-image: url(${menuIcon});
    background-size: contain;
}

.cabecalho__logo {
    width: 3rem;
}

.cabecalho__titulo {
    font-family: ${fonteFamiliaLogo};
    font-size: ${fonteTamanhoLogo};
    color: ${corContrasteEscuro};
    margin-left: 0.5rem;
}

.menu-cabecalho-background {
    background-color: #00000020;
    position: fixed;
    top: 0;
    left: -100vw;
    width: 100vw;
    height: 100vh;
}

.menu-cabecalho {
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
}

.menu-cabecalho__fechar {
    position: absolute;
    right: -2.5rem;
    top: 0.5rem;
    color: ${corContrasteClaro};
    padding: 1rem;
    box-sizing: border-box;
    border-radius: 50%;
    background-color: ${corPrimaria};
}

.menu-cabecalho__fechar::before {
    content: 'X';
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
}

.menu-item {
    display: block;
    padding-top: 1.5rem;
    padding-left: 1rem;
    padding-bottom: 1.5rem;
    border-bottom: 1px solid ${corDivisao};
    color: ${corContrasteEscuro};
}

.menu-item--entrar {
    background-color: ${corPrimaria};
    color: ${corContrasteClaro};
    border: none;
}

.menu-cabecalho--ativo {
    left: 0;
    top: 0;
    transition: 0.25s;
}

.menu-cabecalho--ativo + .menu-cabecalho-background {
    left: 0;
}

@media(min-width: 800px) {
  .container {
		padding-right: 2.5rem;
		padding-left: 2.5rem;	
	}

	.cabecalho {
        grid-template-areas: 'menu logo .';
        height: 6.75rem;
    }

    .cabecalho-container {
        grid-area: logo;
    }

    .cabecalho__titulo {
        font-size: 2.5rem;
    }

    .menu-hamburguer {
        display: none;
    }

    .menu-cabecalho {
        justify-self: flex-start;
        position: static;
        width: fit-content;
        height: fit-content;
        grid-area: menu;
        font-size: 1rem;
    }

    .menu-cabecalho__fechar {
        display: none;
    }

    .menu-cabecalho-background {
        display: none;
    }

    .menu-itens {
        display: flex;
        align-items: center;
    }

    .menu-item {
        border: none;
        padding: 0;
        margin-right: 1rem;
    }

    .menu-item--entrar {
        border-radius: 2rem;
        padding: 1rem 1.5rem;
    }
}

@media(min-width: 1200px) {
	.container {
		padding-left: calc((100vw - 900px)/2);
		padding-right: calc((100vw - 900px)/2);
	}
}

`;