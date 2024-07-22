import '../styles/projects.css';

export default function Projects() {
    return(
        <div className="content-box" id="projects">
            <h1>My Projects</h1>
            <div className="projects-box">
                <h2>Digital Marketplace, Used Textbooks</h2>
                <ul>
                    <li>Developed the frontend for a website on which users can buy and sell used textbooks</li>
                    <li>Used Next.js and React to create pages for users to register an account, log in, view their profile, and send/receive purchase requests</li>
                    <li>Worked in a team of four students, using principles of agile programming to meet regular deadlines</li>
                    <li>Utilized: Next.js, React, AJAX, Tailwind CSS, Git, yup</li>
                </ul>
                <h2>C++ File System</h2>
                <ul>
                    <li>Worked with two other students to create a simple command-line file system in C++</li>
                    <li>Applied principles of high-quality object-oriented programming such as abstraction and polymorphism to keep the project organized, efficient, and scalable</li>
                    <li>Functionality included creating, reading, writing, deleting, and copying several file types</li>
                    <li>Utilized: C++, Unix, Bash, OOP</li>
                </ul>
                <h2>Browser Fingerprinting Research</h2>
                <ul>
                    <li>Explored potential methods for tracking via browser fingerprinting, primarily using JavaScript APIs such as WebGL and MediaDevices</li>
                    <li>Created a website to test the distribution of values across several identifying properties</li>
                    <li>Analyzed and presented the results, focusing on finding the most useful methods for identifying users</li>
                    <li>Utilized: HTML/CSS, JavaScript, Excel</li>
                </ul>
            </div>
        </div>
    );
}