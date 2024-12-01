import React from "react";
import "./ShapeShowcase.css";

function ShapeShowcase(props) {
  return (
    <div className="shape-showcase">
      <div className="shape-showcase-card">
        <div className="shape-showcase-image-card">
          <img src={props.image} className="shape-showcase-image" />
        </div>
        <div className="shape-showcase-info-card">
          <h3 className="shape-showcase-title">{props.name}</h3>
          <p className="shape-showcase-description">{props.description}</p>
          <h2 className="shape-showcase-price">
            {props.price}.<small>00</small> €
          </h2>
          <button
            className="shape-showcase-button btn btn-primary "
            onClick={props.onClick}
          >
            Go To Shop
          </button>
        </div>
      </div>
    </div>
  );
}

export default ShapeShowcase;
