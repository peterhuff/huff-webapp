import './styles/App.css';
import Navbar from "./components/navbar";
// import {
//   BrowserRouter,
//   Routes,
//   Route,
// } from "react-router-dom";
import About from "./pages";
import Projects from "./pages/projects";
import Contact from "./pages/contact";


export default function App() {
  return (
    <div className="App">
      <Navbar />
      <About />
      <Projects />
      <Contact />
    </div>
  );
}

