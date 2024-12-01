import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Shape.css";
import Swal from "sweetalert2";

function Shape(props) {
  const navigate = useNavigate();
  const [purchased, setPurchased] = useState(false);

  function saveToLocalStorage(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
  };

  function loadFromLocalStorage(key) {
    const value = localStorage.getItem(key);
    return value ? JSON.parse(value) : null;
  };

  useEffect(() => {
    const purchasedState = loadFromLocalStorage(`shape_${props.id}_purchased`);
    if (purchasedState !== null) {
      setPurchased(purchasedState);
    }
  }, [props.id]);

  function handleViewDetails() {
    navigate("/shape/" + props.id);
  }

  function handleBuyNow() {
    Swal.fire({
      background: "rgba(0,0,0,1)",
      title: "Buy Now",
      text: `Are you sure you want to buy ${props.name}?`,
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#5e5f5f",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, buy now!",
    }).then((result) => {
      if (result.isConfirmed) {
        setPurchased(true);
        saveToLocalStorage(`shape_${props.id}_purchased`, true);
      }
    });
  }

  return (
    <div className="shape">
      <div className="shape-card">
        {purchased && (
          <div className="shape-purchased-card">
            <div className="shape-purchased"></div>
            <p>Sold Out!</p>
          </div>
        )}
        <div className="shape-image-card">
          <img src={props.image} className="shape-image" alt="shape" />
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
