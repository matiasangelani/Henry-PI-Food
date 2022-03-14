require("dotenv").config();
const router = require("express").Router();
const axios = require("axios").default;
const { API_KEY } = process.env;
const { Recipe } = require("../db");
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.get("/", async (req, res) => {
  const { name } = req.query;
  try {
    const { data } = await axios.get(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}`,
      {
        params: {
          number: 9,
        },
      }
    );

    const recipesFilter = data.results.filter((r) => {
      const find = r.title
        .replace(/,/g, "")
        .split(" ")
        .find((r) => r.toLowerCase() === name.toLowerCase());

      if (find) return r;
    });

    !recipesFilter.length
      ? res.json(`Does not exist recipe with the word ${name.toUpperCase()}`)
      : res.json(recipesFilter);
  } catch (error) {
    res.json({ msg: error });
  }
});

router.get("/:idRecipe", async (req, res) => {
  const { idRecipe } = req.params;
  try {
    const { data } = await axios.get(
      `https://api.spoonacular.com/recipes/${idRecipe}/information?apiKey=${API_KEY}`
    );

    const {
      image,
      sourceName,
      dishTypes,
      diets,
      summary,
      weightWatcherSmartPoints,
      healthScore,
      analyzedInstructions,
    } = data;

    res.json({
      image,
      sourceName,
      dishTypes,
      diets,
      summary,
      weightWatcherSmartPoints,
      healthScore,
      analyzedInstructions,
    });
  } catch (error) {
    res.json({ msg: error });
  }
});

router.post("/", async (req, res) => {
  const { name, dishSummary, points, healthy, instructions } = req.body;

  try {
    await Recipe.create({
      name,
      dishSummary,
      points,
      healthy,
      instructions,
    });
    res.json({ msg: "Instance created" });
  } catch (error) {
    res.json({ msg: error });
  }
});

module.exports = router;
