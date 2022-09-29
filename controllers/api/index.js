const router = require('express').Router();
const userRoutes = require('./userRoutes');
const recipeRoutes = require('./recipes');
const commentRoutes = require('./comments');

router.use('/users', userRoutes);
router.use('/recipes', recipeRoutes);
router.use('/comments', commentRoutes);

module.exports = router;
