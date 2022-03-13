require("dotenv").config();
const router = require("express").Router();
const axios = require("axios").default;
const { API_KEY } = process.env;
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.get("/", async (req, res) => {
  //const { name } = req.query;
  const name = "Stew";
  try {
    const { data } = await axios.get(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}`,
      {
        params: {
          number: 9,
        },
      }
    );

    const listWithName = data.results.reduce((list, r) => {
      const find = r.title
        .replace(/,/g, "")
        .split(" ")
        .find((r) => r.toLowerCase() === name.toLowerCase());

      find ? list.push(r.id) : null;

      return list;
    }, []);
    console.log(listWithName);

    res.json(data);
  } catch (error) {
    res.json({ msg: error });
  }
});

module.exports = router;
