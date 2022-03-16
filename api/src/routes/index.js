require("dotenv").config();
const router = require("express").Router();
const axios = require("axios").default;
const { API_KEY } = process.env;
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.get("/", async (req, res) => {
  try {
    const { data } = await axios.get(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&addRecipeInformation=true`,
      {
        params: {
          number: 9,
        },
      }
    );

    res.json(data.results);
  } catch (error) {
    res.json({ msg: error });
  }
});

module.exports = {
  index: router,
  recipes: require("./recipes"),
  types: require("./types"),
};
