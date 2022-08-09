import imagem from '../../assets/img/doguito.svg';

const Cabecalho = () => {
    return (
        <header className="cabecalho container">
            <div className="menu-hamburguer">
                <span className="menu-hamburguer__icone"></span>
            </div>
            <div className="cabecalho-container">
                <a href="" className="flex flex--centro">
                    <img className='cabecalho__logo' src={imagem} alt="Logo Doguito" />
                    <h1 className="cabecalho__titulo">Petshop</h1>
                </a>
            </div>
            <nav className="menu-cabecalho">
                <ul className="menu-itens">
                    <li><a className='menu-item menu-item--entrar' href="#">Entrar</a></li>
                    <li><a className='menu-item' href="#">Produtos</a></li>
                    <li><a className='menu-item' href="/">Blog</a></li>
                    <li><a className='menu-item' href="/sobre">Sobre</a></li>
                </ul>
            </nav>
            <div className="menu-cabecalho-background"></div>
        </header>
    );
};

export default Cabecalho;