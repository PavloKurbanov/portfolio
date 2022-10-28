import './header.css';

function Header() {
    return (
        <header>
            <div className="hero">
                <nav>
                    <h2 className="logo">Portfo<span>lio</span></h2>
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Skills</a></li>
                        <li><a href="#">Contacst Us</a></li>
                    </ul>
                    <a href="#" className="button">Subscribe</a>
                </nav>
            </div>
        </header>
    );
}

export default Header;