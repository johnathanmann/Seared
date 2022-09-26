const router = require('express').Router();
const userRoutes = require('./userRoutes');
const commentRoutes = require('./comments');
const recipeRoutes = require('./recipes.js');

router.use('/users', userRoutes);
router.use('/comments', commentRoutes);
router.use('/recipes', recipeRoutes);

module.exports = router;
