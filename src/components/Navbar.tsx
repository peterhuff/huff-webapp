import '../styles/navbar.css';
import AnchorLink from "react-anchor-link-smooth-scroll";

export default function Navbar() {
    return (
        <div className="Navbar">
            <div className="Title">
                <a href={'/'}>
                    <h1>Peter Huff</h1>
                </a> 
            </div>
            <nav>
                <menu className="Links">
                    <li>
                        <AnchorLink href="#about">About</AnchorLink>
                    </li>
                    <li>
                        <AnchorLink href="#projects">Projects</AnchorLink>
                    </li>
                    <li>
                        <AnchorLink href="#contact">Contact</AnchorLink>
                    </li>
                </menu>
            </nav>
        </div>
    );
}