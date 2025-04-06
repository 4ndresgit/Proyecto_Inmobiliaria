import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Properties from "./pages/Properties";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/propiedades" element={<Properties />} />
      </Routes>
    </Router>
  );
};

export default App;
