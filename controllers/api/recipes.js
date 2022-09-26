const router = require('express').Router();
const { User } = require('../../models');

router.get('/', async (req, res) => {
  // pull all recipes
  try {
    const allRecipes = await Recipes.findAll({
      include: [{ model: User }],
    });
    res.json(allRecipes);
  } catch (err) {
    res.status(500).json(err.message);
  }
});

router.get('/:id', async (req, res) => {
  // Pull a single recipe by id
  try {
    const singleRecipe = await Recipes.findByPk(req.params.id, {
      include: [{ model: User }],
    });
    res.json(singleRecipe);
  } catch (err) {
    res.status(500).json(err.message);
  }
});

router.post('/', async (req, res) => {
  // create a new recipe
  try {
    const createRecipe = await Recipes.create(req.body);
    res.json(createRecipe);
  } catch (err) {
    res.status(500).json(err.message);
  }
});

router.delete('/:id', async (req, res) => {
  // delete recipe by id
  try {
    const removeRecipe = await Recipes.destroy({
      where: { id: req.params.id },
    });
    res.json(removeRecipe);
  } catch (err) {
    res.status(500).json(err.message);
  }
});

module.exports = router;
