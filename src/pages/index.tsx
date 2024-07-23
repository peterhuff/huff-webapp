import '../styles/profile.css';
import github from "../images/github.svg"
import linkedin from "../images/linkedin34.png"
import AnchorLink from "react-anchor-link-smooth-scroll";

export default function Profile () {
    return(
        <div className="content-box" id="frontpage">
            <div className="title">
                <h1>Peter Huff</h1>
                <h2>Software engineer and full-stack developer</h2>
            </div>
            <div className="info">
                <div className="about-me">
                    <h3>About Me</h3>
                    <p>
                        Hi, I'm Peter. I studied at Washington University in St. Louis and graduated in 2023 with a BS in computer science.
                        I have a passion for addressing problems with creative, efficient solutions.
                        I have experience developing a variety of applications, and I'm always looking to expand my skill set.
                    </p>
                </div>
                <div className="data">
                    <div className="skills">
                        <h3>Skills</h3>
                        <ul className="skills-list">
                            <li>Java</li>
                            <li>Python</li>
                            <li>C++</li>
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>Javascript</li>
                            <li>SQL</li>
                            <li>ReactJS</li>
                            <li>Tailwind</li>
                            <li>Git</li>
                            <li>Linux</li>
                            <li>AWS</li>
                            <li>Firebase</li>
                        </ul>
                    </div>
                    <div className="social">
                        {/* <h3>Social</h3> */}
                        <ul className="social-list">
                            <li>
                                <a href="https://github.com/peterhuff" target="_blank" rel="noopener noreferrer">
                                    <img src={github} alt="Github logo" className="social-icon" id="github-icon"/>
                                    <span>Github</span>
                                </a>
                            </li>
                            <li>
                                <a href="https://www.linkedin.com/in/peter-huff-58450a202/" target="_blank" rel="noopener noreferrer">
                                    <img src={linkedin} alt="Linkedin logo" className="social-icon" id="linkedin-icon"/>
                                    <span>Linkedin</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <AnchorLink className="view-portfolio" offset="64" href="#projects">
                View Portfolio &#8595;
            </AnchorLink>
        </div>
    );
}