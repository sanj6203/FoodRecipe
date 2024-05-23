import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useSearchParams } from "react-router-dom";
import "./Content.css";

export const Content = () => {
  // State to store the recipe details
  const [recipe, setRecipe] = useState(null);

  const [searchParams] = useSearchParams();
  const recipeId = searchParams.get("id");
  // Fetch recipe details from the backend API
  useEffect(() => {
    const fetchRecipeDetails = async () => {
      try {
        const response = await fetch(
          `http://localhost:3000/recipe?q=${recipeId}`
        );
        if (response.ok) {
          const data = await response.json();
          setRecipe(data);
        } else {
          throw new Error("Failed to fetch recipe details");
        }
      } catch (error) {
        console.error("Error fetching recipe details:", error);
      }
    };

    // Call the fetchRecipeDetails function
    fetchRecipeDetails();
  }, [recipeId]); // Fetch recipe details whenever the recipeId changes

  // Render loading message while fetching data
  if (!recipe) {
    return <div>Loading...</div>;
  }

  // Render recipe details
  return (
    <div className="content-container">
      <h2>{recipe.name}</h2>
      <img src={recipe.image} width="600px" alt={recipe.name} />
      <p>Category: {recipe.category}</p>
      <p>Difficulty: {recipe.difficulty}</p>
      <p>Servings: {recipe.servings}</p>
      <h3>Ingredients:</h3>
      <ul>
        {recipe.ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>
      <h3>Instructions:</h3>
      <ol>
        {recipe.instructions.map((instruction, index) => (
          <li key={index}>{instruction}</li>
        ))}
      </ol>
    </div>
  );
};
