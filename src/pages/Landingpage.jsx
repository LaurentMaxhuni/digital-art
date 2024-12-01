import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/js/dist/collapse.js";
import logo from "../assets/3ES.png";
import heroImage from "../assets/hero-image.png";
import { useNavigate } from "react-router-dom";

function LandingPage() {
  const navigate = useNavigate();
  return (
    <div className="landing-page">
      <header>
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
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
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
        <section className="hero py-5 my-5">
          <div className="container">
            <div className="row">
              <div className="col-12 col-md-5 col-lg-5 col-xl-5 mb-5">
                <h1 className="display-5 fw-bold mb-3">
                  Digital <br /> Art
                </h1>
                <p className="lead">
                  Welcome to our digital art store, the ultimate destination for
                  discovering an extensive collection of digital art pieces
                  created by talented artists from around the globe. Whether
                  you're looking for vibrant abstract designs, stunning
                  landscapes, or intricate portraits, our curated selection
                  offers something for every art lover.
                </p>
                <button
                  onClick={() => navigate("/shop")}
                  className="btn btn-primary"
                >
                  Shop Now
                </button>
              </div>
              <div className="col-12 col-md-7 col-lg-7 col-xl-7 d-flex justify-content-center">
                <img
                  src={heroImage}
                  alt=""
                  className="img-fluid hero-image"
                  width={600}
                />
              </div>
            </div>
          </div>
        </section>
      </header>
    </div>
  );
}

export default LandingPage;
