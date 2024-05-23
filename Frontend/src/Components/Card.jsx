import React from "react";
import { NavLink } from "react-router-dom";
import "./Card.css";

const Card = ({ id, name, image, category, difficulty }) => {
  return (
    <div className="card" key={id}>
      <img width="400px" className="card-img-top" src={image} alt={name} />
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">Category : {category}</p>
        <p className="card-text">Difficulty : {difficulty}</p>
      </div>
    </div>
  );
};

export default Card;
