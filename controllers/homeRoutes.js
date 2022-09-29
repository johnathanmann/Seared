const { Recipes } = require('../models');
const { Comments } = require('../models');

const router = require('express').Router();

// Finds random Recipe
router.get('/recipe/random', async (req, res) => {
  try {
    // Gets recipe by number 1-5
    const randomNumber = Math.floor(Math.random() * 5) + 1;
    const singleRecipe = await Recipes.findOne({
      where: {
        id: randomNumber,
      },
      include: [
        {
          model: Comments,
          as: 'comments',
        },
      ],
    });
    const recipe = singleRecipe.get({ plain: true });
    console.log(recipe);
    res.render('recipe', {
      ...recipe,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
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
