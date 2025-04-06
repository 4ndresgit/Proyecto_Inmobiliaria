import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div>
      <Header />
      <main>
        <h1>Bienvenido a la Inmobiliaria</h1>
        <p>Encuentra las mejores propiedades en venta y alquiler.</p>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
