import React from "react";
import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";

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
