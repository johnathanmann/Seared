const { Recipes } = require('../models');
const { Comments } = require('../models');

const router = require('express').Router();
// const { User } = require('../models');
// const withAuth = require('../utils/auth');

router.get('/recipe', async (req, res) => {
  try {
    const dbRecipes = await Recipes.findAll({ raw: true });
    console.log(dbRecipes);
    res.render('recipe', {
      dbRecipes,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// Finds random Recipe
router.get('/recipe/random',async  (req, res) => {
  try {
    console.log(req.params);
    // Gets recipe by number 1-5
    const singleRecipe = await Recipes.findByPk(parseInt(Math.floor(Math.random() * 5) + 1), {raw: true});
    console.log(singleRecipe);
    res.render('recipe', singleRecipe);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/comments', async (req, res) => {
  try {
    const dbComments = await Comments.findAll({ raw: true });
    console.log(dbComments);
    res.render('comment', {
      dbComments,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/', async (_req, res) => {
  try {
    // Change this to where you app should go
    res.render('homepage');
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
    res.redirect('/logged_in_hompage');
    return;
  }
  res.render('signup');
});

module.exports = router;
