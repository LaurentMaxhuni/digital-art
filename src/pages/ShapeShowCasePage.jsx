import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import ShapeShowcase from "../components/ShapeShowcase";
import shapesData from "../data/shapes";

function ShapeShowCasePage() {
  const navigate = useNavigate();
  const { id } = useParams();
  const shape = shapesData.find(shape => shape.id === parseInt(id));


  function handleClick() {
    navigate("/shop");
  }

  return (  
    <ShapeShowcase onClick={handleClick} name={shape.name} image={shape.image} description={shape.description} price={shape.price} />
  );
}

export default ShapeShowCasePage;
