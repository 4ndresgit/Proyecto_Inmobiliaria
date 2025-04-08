import React from "react";
import PropertyCard from "../Components/PropertyCard";
import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";

const Properties = () => {
  const properties = [
    { image: "/img/propiedades/casa1.png", title: "Casa 1", description: "Casa en venta", price: "U$S 175.000", location: "Av. España 789" },
    { image: "/img/propiedades/casa2.png", title: "Casa 2", description: "Casa en alquiler", price: "Consulte valor", location: "Rosales 212" },
    // Agrega más propiedades
  ];

  return (
    <div>
      <Header />
      <main>
        <h2>Propiedades</h2>
        <div className="property-cards">
          {properties.map((property, index) => (
            <PropertyCard key={index} {...property} />
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Properties;
