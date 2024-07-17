import '../styles/navbar.css';
import AnchorLink from "react-anchor-link-smooth-scroll";

export default function Navbar() {
    return (
        <nav className="Navbar">
            <menu className="Links">
                <li>
                    <AnchorLink offset="64" href="#profile">Profile</AnchorLink>
                </li>
                <li>
                    <AnchorLink offset="64" href="#projects">Projects</AnchorLink>
                </li>
                <li>
                    <AnchorLink offset="64" href="#contact">Contact</AnchorLink>
                </li>
            </menu>
        </nav>
    );
}