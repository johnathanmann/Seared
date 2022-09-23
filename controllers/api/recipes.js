const router = require('express').Router();
const { Recipes } = require('../../models/Recipes');

var randomId = Math.floor(Math.random() * 5) + 1;
console.log(randomId)
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

// route to get one recipe
router.get('/api/recipes', async (req, res) => {
  try{ 
      const randomRecipe = await Recipes.findByPk(randomId);
      if(!randomRecipe) {
          res.status(404).json({message: 'No recipe with this id!'});
          return;
      }
      const recipe = randomRecipe.get({ plain: true });
      res.render('recipe', recipe);
    } catch (err) {
        res.status(500).json(err);
    };     
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

router.delete('/recipes/:id', async (req, res) => {
  // delete recipe by id
  try {
    const removeRecipe = await Recipe.destroy({ where: { id: req.params.id } });
    res.json(removeRecipe);
  } catch (err) {
    res.status(500).json(err.message);
  }
});

module.exports = router;