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
  try {
    const { data } = await axios.get(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&addRecipeInformation=true`,
      {
        params: {
          number: 9,
        },
      }
    );

    let recipes = await Recipe.findAll({
      include: Diet,
    });

    recipes = recipes.map((r) => {
      const recipe = r.toJSON();

      return {
        ...recipe,
        diets: recipe.diets.map((d) => d.name),
      };
    });

    console.log('index', recipes);

    const response = [...data.results, ...recipes];
    //console.log('index2', response);

    res.json(response);
  } catch (error) {
    res.json({ msg: error });
  }
});

module.exports = {
  index: router,
  recipes: require('./recipes'),
  recipe: require('./recipe'),
  types: require('./types'),
};
