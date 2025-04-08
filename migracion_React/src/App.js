import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Importa react-router-dom
import Header from './Components/Header'; // Importa tu Header
import Home from './pages/Home'; // Asegúrate de tener las páginas correspondientes
import SobreNosotros from './pages/SobreNosotros';
import Propiedades from './pages/Propiedades';
import Contacto from './pages/Contacto';
import Footer from './Components/Footer';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sobre-nosotros" element={<SobreNosotros />} />
        <Route path="/propiedades" element={<Propiedades />} />
        <Route path="/contacto" element={<Contacto />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;

