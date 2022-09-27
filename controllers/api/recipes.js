const router = require('express').Router();
const { Recipes } = require('../../models');



router.get('/', async (req, res) => {
  try {
    const allRecipes = await Recipes.findAll();
    res.json(allRecipes);
  } catch (err) {
    res.status(500).json(err.message);
  }
});

router.get('/:id', async (req, res) => {
  // Pull a single recipe by id
  try {
    const singleRecipe = await Recipes.findByPk(req.params.id);
    res.json(singleRecipe);
  } catch (err) {
    res.status(500).json(err);
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
