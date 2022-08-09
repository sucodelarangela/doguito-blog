import { Link } from 'react-router-dom';
import imagem from '../../assets/img/doguito.svg';

const Cabecalho = () => {
    return (
        <header className="cabecalho container">
            <div className="menu-hamburguer">
                <span className="menu-hamburguer__icone"></span>
            </div>
            <div className="cabecalho-container">
                <Link to="#" className="flex flex--centro">
                    <img className='cabecalho__logo' src={imagem} alt="Logo Doguito" />
                    <h1 className="cabecalho__titulo">Petshop</h1>
                </Link>
            </div>
            <nav className="menu-cabecalho">
                <ul className="menu-itens">
                    <li><Link className='menu-item menu-item--entrar' to="#">Entrar</Link></li>
                    <li><Link className='menu-item' to="#">Produtos</Link></li>
                    <li><Link className='menu-item' to="/">Blog</Link></li>
                    <li><Link className='menu-item' to="/sobre">Sobre</Link></li>
                </ul>
            </nav>
            <div className="menu-cabecalho-background"></div>
        </header>
    );
};

export default Cabecalho;