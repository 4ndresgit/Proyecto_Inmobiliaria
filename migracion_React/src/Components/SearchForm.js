import React, { useState } from "react";

const SearchForm = () => {
  const [operation, setOperation] = useState("");
  const [propertyType, setPropertyType] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes manejar la lógica de búsqueda
    console.log(`Buscando ${operation} ${propertyType}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Tipo de operación"
        value={operation}
        onChange={(e) => setOperation(e.target.value)}
      />
      <input
        type="text"
        placeholder="Tipo de propiedad"
        value={propertyType}
        onChange={(e) => setPropertyType(e.target.value)}
      />
      <button type="submit">Buscar</button>
    </form>
  );
};

export default SearchForm;
