require('dotenv').config();
const router = require('express').Router();
const { Recipe, Diet } = require('../db');

router.post('/', async (req, res) => {
  const { name, dishSummary, points, healthy, instructions, diets } = req.body;

  try {
    const recipe = await Recipe.create({
      title: name,
      summary: dishSummary,
      weightWatcherSmartPoints: points,
      healthScore: healthy,
      instructions,
    });

    const dbDiets = await Diet.findAll();

    const matchDiets = await dbDiets.filter((d) => {
      const diet = d.toJSON();
      if (diets.includes(diet.name)) return d;
    });

    await recipe.addDiets(matchDiets);

    res.json({ msg: 'Instance created' });
  } catch (error) {
    res.json({ msg: error });
  }
});

module.exports = router;
