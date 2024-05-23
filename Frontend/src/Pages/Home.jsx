import React, { useEffect, useState } from "react";
import Card from "../Components/Card";
import axios from "axios";
import { NavLink } from "react-router-dom";
import "./Home.css";

export const Home = () => {
  // State to store recipe data
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    // Fetch recipe data from the server
    axios
      .get("http://localhost:3000/recipe")
      .then((response) => {
        // Set the fetched data to state
        setRecipes(response.data);
      })
      .catch((error) => {
        console.error("Error fetching recipe data:", error);
      });
  }, []);

  return (
    <div>
      {/* Map through the recipes and render a Card component for each recipe */}
      {recipes.map((recipe) => (
        <NavLink
          key={recipe._id}
          to={`/content?id=${recipe._id}`}
          className="nav-link"
        >
          <Card
            className="card"
            id={recipe._id}
            name={recipe.name}
            image={recipe.image}
            category={recipe.category}
            difficulty={recipe.difficulty}
          />
        </NavLink>
      ))}
    </div>
  );
};
