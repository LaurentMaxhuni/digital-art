import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LandingPage from "./pages/Landingpage.jsx";
import ShopPage from "./pages/ShopPage";
import ShapeShowcasePage from "./pages/ShapeShowCasePage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/shop" element={<ShopPage />} />
        <Route path="/shape/:id" element={<ShapeShowcasePage />} />
      </Routes>
    </Router>
  );
}

export default App;
