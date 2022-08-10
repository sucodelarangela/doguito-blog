import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// estilos
import { GlobalStyle } from './assets/css/GlobalStyles';

// pages
import Home from './paginas/Home';
import NotFound from './paginas/NotFound';
import Post from './paginas/Post';
import Sobre from './paginas/Sobre';
import Cabecalho from './components/Cabecalho';
import Categoria from './paginas/Categoria';

function App() {
    return (
        <Router>
            <GlobalStyle />
            <Cabecalho />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/sobre' element={<Sobre />} />
                <Route path='/categoria/:id/*' element={<Categoria />} />
                <Route path='/posts/:id' element={<Post />} />
                <Route path='*' element={<NotFound />} />
            </Routes>
        </Router>
    );
}

export default App;
