import '../styles/profile.css';

export default function Profile () {
    return(
        <div className="content-box" id="profile">
            <div className="about-me">
                <h2>Hi, I'm Peter</h2>
                <p>
                    I'm a software developer and engineer. I studied at Washington University in St. Louis and graduated in 2023 with a BS in computer science. 
                    I have experience developing a variety of applications, and I'm always looking to expand my skill set.
                </p>
            </div>
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
        </div>
    );
}