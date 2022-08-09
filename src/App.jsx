import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// estilos
import { GlobalStyle } from './assets/css/GlobalStyles';

// pages
import Home from './paginas/Home';
import NotFound from './paginas/NotFound';
import Sobre from './paginas/Sobre';

function App() {
    return (
        <Router>
            <GlobalStyle />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/sobre' element={<Sobre />} />
                <Route path='*' element={<NotFound />} />
            </Routes>
        </Router>
    );
}

export default App;
