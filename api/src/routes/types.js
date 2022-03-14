require("dotenv").config();
const router = require("express").Router();
const axios = require("axios").default;
const { API_KEY } = process.env;
const { Diet } = require("../db");
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.get("/", async (req, res) => {
  const diets = [
    { name: "Gluten Free" },
    { name: "Ketogenic" },
    { name: "Vegetarian" },
    { name: "Lacto-Vegetarian" },
    { name: "Ovo-Vegetarian" },
    { name: "Vegan" },
    { name: "Pescetarian" },
    { name: "Paleo" },
    { name: "Low FODMAP" },
    { name: "Whole30" },
  ];

  diets.forEach(async (d) => {
    try {
      await Diet.findOrCreate({
        where: {
          name: d.name,
        },
      });
    } catch (error) {
      res.json({ msg: error });
    }
  });

  res.json("Created");
});

module.exports = router;
