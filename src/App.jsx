import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

import Navbar from "./components/Navbar.jsx";
import Home from "./components/Home.jsx";
import About from "./components/About.jsx";
import Skills from "./pages/Skills.jsx";
import Gallery from "./pages/Gallary.jsx";
import Contact from "./pages/Contacts.jsx";
import Resume from "./pages/Resume.jsx";
import ChatBot from "./components/ChatBot.jsx";

function HomePage() {
  return (
    <>
      <Home />
      <About />
      <Skills />
      {/* Gallery REMOVED from homepage */}
    </>
  );
}

export default function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />

        <main style={{ flex: 1 }}>
          <Routes>
            <Route path="/" element={<HomePage />} />

            {/* ⭐ NEW GALLERY PAGE ROUTE */}
            <Route path="/gallery" element={<Gallery />} />

            <Route path="/contact" element={<Contact />} />
            <Route path="/resume" element={<Resume />} />
          </Routes>
        </main>

        <footer className="footer">
          © {new Date().getFullYear()} Gaurav Chauhan @ 2025
        </footer>
      </div>

      <ChatBot />
    </Router>
  );
}
