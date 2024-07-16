import '../styles/navbar.css';

export default function Navbar() {
    return (
        <div className="Navbar">
            <div className="Title">
                <h1>Peter Huff</h1>
            </div>
            <nav>
                <menu className="Links">
                    <li>
                        <a href={'/'}>About</a>
                    </li>
                    <li>
                        <a href={'/projects'}>Projects</a> 
                    </li>
                    <li>
                        <a href={'/contact'}>Contact</a> 
                    </li>
                </menu>
            </nav>
        </div>
    );
}