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

// Connect to MongoDB
mongoose
  .connect("mongodb://localhost:27017/recipesDB", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("Could not connect to MongoDB", err));

// Create a new recipe document and save it to the database
const newRecipe = new Recipe({
  name: "Grilled Lemon Herb Chicken",
  image:
    "https://www.foodandwine.com/thmb/t9YqzGbmH-huAbV6xitCQs0-G4s=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/FAW-recipes-herb-and-lemon-roasted-chicken-hero-c4ba0aec56884683be482c47b1e1df11.jpg",
  category: "Main Dish",
  difficulty: "Medium",
  servings: 4,
  ingredients: [
    "4 boneless, skinless chicken breasts",
    "2 lemons, juiced and zested",
    "3 cloves garlic, minced",
    "2 tablespoons olive oil",
    "1 tablespoon fresh rosemary, chopped",
    "1 tablespoon fresh thyme leaves",
    "Salt and pepper to taste",
  ],
  instructions: [
    "In a small bowl, whisk together lemon juice, lemon zest, minced garlic, olive oil, rosemary, thyme, salt, and pepper.",
    "Place chicken breasts in a resealable plastic bag and pour marinade over them. Seal the bag and refrigerate for at least 30 minutes, or up to 4 hours.",
    "Preheat grill to medium-high heat. Remove chicken from marinade and discard excess marinade.",
    "Grill chicken for 6-7 minutes per side, or until cooked through and juices run clear.",
    "Remove chicken from grill and let rest for 5 minutes before serving.",
  ],
});

// Save the new recipe to the database
newRecipe
  .save()
  .then(() => console.log("Recipe saved to database"))
  .catch((err) => console.error("Error saving recipe", err));
