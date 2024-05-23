const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");

const Recipe = require("./Schema/recipe.js");

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

mongoose
  .connect("mongodb://localhost:27017/recipesDB", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("Could not connect to MongoDB", err));

app.get("/", (req, res) => {
  res.send("home");
});

app.get("/recipe", async (req, res) => {
  try {
    const { q } = req.query;

    if (q) {
      const data = await Recipe.findById(q);
      if (data) {
        res.send(data);
      } else {
        res.status(404).send("Recipe not found");
      }
    } else {
      const data = await Recipe.find({});
      res.send(data);
    }
  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).send("Internal Server Error");
  }
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
