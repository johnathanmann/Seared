const router = require('express').Router();
const { Recipes, User } = require('../../models');

router.get('/', async (req, res) => {
  try {
    const allRecipes = await Recipes.findAll()
    res.json(allRecipes);
  } catch (err) {
    res.status(500).json(err.message);
  }
});

router.get('/:id', async (req, res) => {
  // Pull a single recipe by id
  try {
    const recipeId = await Recipes.findByPk(req.params.id);
 // If the product data cant be found the user will be let known
    if (!recipeId) {
      res.status(404).json({ message: 'No recipe found with that id!' });
      return;
    }

    res.status(200).json(recipeId);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post('/', async (req, res) => {
  // create a new recipe
  try {
    const createCat = await Category.create(req.body);
    res.json(createCat);
  } catch (err) {
    res.status(500).json(err.message);
  }
});

router.delete('/:id', async (req, res) => {
  // delete recipe by id
  try {
    const removeRecipe = await Recipe.destroy({ where: { id: req.params.id } });
    res.json(removeRecipe);
  } catch (err) {
    res.status(500).json(err.message);
  }
});

module.exports = router;