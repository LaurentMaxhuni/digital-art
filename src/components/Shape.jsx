import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Shape.css";

function Shape(props) {
  const navigate = useNavigate();
  const [purchased, setPurchased] = useState(props.purchased);

  function handleViewDetails() {
    navigate("/shape/" + props.id);
  }

  function handleBuyNow() {
    alert(`You successfully purchased ${props.name}!`);
    setPurchased(true);
  }

  return (
    <div className="shape">
    {purchased && <div className="purchased">Sold Out!</div>}
      <h3>{props.name}</h3>
      <img src={props.image} alt="" />
      <p>{props.price}$</p>
      <div className="shape-buttons">
        <button onClick={handleViewDetails}>View Details</button>
        <button onClick={handleBuyNow}>Buy Now</button>
      </div>
    </div>
  );
}

export default Shape;
