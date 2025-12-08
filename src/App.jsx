import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

import Background from "./components/Background.jsx";
import Navbar from "./components/Navbar.jsx";
import Contact from "./pages/Contacts.jsx";  

export default function App() {
  return (
    <Router>
      <Background />
      <div className="app">
        <Navbar />

        <main style={{ flex: 1 }}>
          <Routes>
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        <footer className="footer">
          © {new Date().getFullYear()} Gaurav Chauhan @ 2025
        </footer>
      </div>
    </Router>
  );
}

