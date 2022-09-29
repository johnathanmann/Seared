const { Recipes } = require('../models');
const { Comments } = require('../models');

const router = require('express').Router();

// Finds random Recipe
router.get('/recipe/random', async (req, res) => {
  try {
    // Gets recipe by number 1-5
    const dataRecipes = await Recipes.findAll({
      include: [
        {
          model: Comments,
          as: 'comments',
        },
      ],
    });
    const recipe = dataRecipes.map((recipe) => recipe.get({ plain: true }));
    const randomNumber = Math.floor(Math.random() * recipe.length);
    console.log(recipe[randomNumber]);
    res.render('recipe', {
      ...recipe[randomNumber],
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err.message);
  }
});

router.get('/', async (req, res) => {
  try {
    // Change this to where you app should go
    res.render('homepage', {
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/login', (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    // CHANGE THIS TO WHEREVER YOUR PROJECT NEEDS TO GO
    res.redirect('/');
    return;
  }
  res.render('login');
});

router.get('/sign-up', (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    // CHANGE THIS TO WHEREVER YOUR PROJECT NEEDS TO GO
    res.redirect('/');
    return;
  }
  res.render('signup');
});

module.exports = router;
