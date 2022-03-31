require('dotenv').config();
const router = require('express').Router();
const axios = require('axios').default;
const { API_KEY } = process.env;
const { Recipe, Diet } = require('../db');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.get('/', async (req, res) => {
  const { name } = req.query;
  const regExp = new RegExp(`${name}`, 'ig');
  try {
    const { data } = await axios.get(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&addRecipeInformation=true`,
      {
        params: {
          number: 100,
        },
      }
    );

    const recipesFilter = data.results.filter((r) => {
      const find = regExp.test(r.title);
      if (find) return r;
    });

    !recipesFilter.length
      ? res.json([`Does not exist recipe with the word ${name.toUpperCase()}`])
      : res.json(recipesFilter);
  } catch (error) {
    res.json({ msg: 'error in axios' });
  }
});

router.get('/:idRecipe', async (req, res) => {
  const { idRecipe } = req.params;
  const { created } = req.query;

  try {
    if (created) {
      let response = await Recipe.findByPk(idRecipe, {
        include: Diet,
      });

      response = response.toJSON();
      response = {
        ...response,
        diets: response.diets.map((d) => d.name),
      };

      res.json(response);
    } else {
      const { data } = await axios.get(
        `https://api.spoonacular.com/recipes/${idRecipe}/information?apiKey=${API_KEY}`
      );

      const {
        image,
        title,
        diets,
        summary,
        weightWatcherSmartPoints,
        healthScore,
        analyzedInstructions,
      } = data;

      res.json({
        image,
        title,
        diets,
        summary,
        weightWatcherSmartPoints,
        healthScore,
        analyzedInstructions,
      });
    }
  } catch (error) {
    res.json({ msg: error });
  }
});

module.exports = router;
