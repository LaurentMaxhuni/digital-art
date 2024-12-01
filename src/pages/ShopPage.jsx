import React from "react";
import shapes from "../data/shapes";
import Shape from "../components/Shape";
import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/js/dist/collapse.js";
import logo from "../assets/3ES.png";

function ShopPage() {
  return (
    <div className="shop-page">
      <nav className="navbar navbar-expand-lg">
        <div className="container">
          <a className="navbar-brand" href="/">
            <img src={logo} alt="" className="img-fluid" width={150} />
          </a>
          <button
            className="navbar-toggler collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a
                  className="nav-link active fw-bold"
                  aria-current="page"
                  href="/"
                >
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/shop">
                  Shop
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="grid-container">
        {shapes.map((shape) => {
          return (
            <Shape
              image={shape.image}
              name={shape.name}
              price={shape.price}
              id={shape.id}
              key={shape.id}
            />
          );
        })}
      </div>
    </div>
  );
}

export default ShopPage;
