import { createGlobalStyle } from "styled-components";
import { corContrasteEscuro, corSecundaria, fonteFamiliaCorpo, fonteTamanhoLogo, fonteTamanhoMenuCabecalhoItem } from "./UI/variaveis";

export const GlobalStyle = createGlobalStyle`
* {
    box-sizing: border-box;
    font-family: ${fonteFamiliaCorpo};
    margin: 0;
    padding: 0;
    text-decoration: none;
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

@media(min-width: 800px) {
  .container {
		padding-right: 2.5rem;
		padding-left: 2.5rem;	
	}

    // ${fonteTamanhoLogo} = 2.5rem
    // ${fonteTamanhoMenuCabecalhoItem} = 1rem
}

@media(min-width: 1200px) {
	.container {
		padding-left: calc((100vw - 900px)/2);
		padding-right: calc((100vw - 900px)/2);
	}
}

`;