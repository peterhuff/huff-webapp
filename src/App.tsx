import './styles/App.css';
import Navbar from "./components/navbar";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import About from "./pages";
import Projects from "./pages/projects";
import Contact from "./pages/contact";


export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

