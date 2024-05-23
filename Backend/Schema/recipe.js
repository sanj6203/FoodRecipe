// Schema/recipe.js
const mongoose = require("mongoose");

// Define Mongoose Schema
const recipeSchema = new mongoose.Schema({
  name: { type: String, required: true },
  image: { type: String },
  category: { type: String, required: true },
  difficulty: {
    type: String,
    enum: ["Easy", "Medium", "Hard"],
    default: "Medium",
  },
  servings: { type: Number, required: true },
  ingredients: [{ type: String, required: true }],
  instructions: [{ type: String, required: true }],
});

// Create Mongoose Model
const Recipe = mongoose.model("Recipe", recipeSchema);

module.exports = Recipe;
