// estilos
import { GlobalStyle } from './assets/css/GlobalStyles';

// pages
import Home from './paginas/Home';
import Sobre from './paginas/Sobre';

function App() {
  const Router = () => {
    const location = window.location.pathname;
    if (location === '/sobre') {
      return <Sobre />;
    } else {
      return <Home />;
    }
  };

  return (
    <>
      <GlobalStyle />
      {Router()}
    </>
  );
}

export default App;
