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
      <div className="shape-card">
      {purchased && <div className="shape-purchased-card"><div className="shape-purchased"></div><p>Sold Out!</p></div>}
        <div className="shape-image-card">
          <img src={props.image} className="shape-image" />
        </div>
        <div className="shape-info-card">
          <h3 className="shape-title">{props.name}</h3>
          <h2 className="shape-price">
            {props.price}.<small>00</small> €{" "}
          </h2>
          <div className="shape-buttons">
            <button
              className="shape-button btn btn-primary"
              onClick={handleViewDetails}
            >
              View Details
            </button>
            <button
              className="shape-button btn btn-primary"
              onClick={handleBuyNow}
            >
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Shape;
