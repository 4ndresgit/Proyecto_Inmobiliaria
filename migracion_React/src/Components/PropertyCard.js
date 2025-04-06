import React from "react";

const PropertyCard = ({ image, title, description, price, location }) => {
  return (
    <div className="card">
      <img src={image} alt="Propiedad" />
      <div className="card-details">
        <h2>{title}</h2>
        <p>{description}</p>
        <p>{location}</p>
        <p className="price">{price}</p>
        <button>Ampliar</button>
      </div>
    </div>
  );
};

export default PropertyCard;
