require('dotenv').config();
const router = require('express').Router();
const { Diet } = require('../db');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.get('/', async (req, res) => {
  const diets = [
    { name: 'Vegetarian' },
    { name: 'Vegan' },
    { name: 'Gluten Free' },
    { name: 'Dairy Free' },
    { name: 'Lacto Ovo Vegetarian' },
    { name: 'Pescetarian' },
    { name: 'Paleolithic' },
    { name: 'Low FODMAP' },
    { name: 'Primal' },
    { name: 'Whole30' },
    { name: 'Ketogenic' },
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

  try {
    let dbDiets = await Diet.findAll();
    while (dbDiets.length !== diets.length) dbDiets = await Diet.findAll();

    res.json(dbDiets);
  } catch (error) {
    res.json(error);
  }
});

module.exports = router;
