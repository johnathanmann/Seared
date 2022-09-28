const User = require('./User');
const Recipes = require('./Recipes');
const Comments = require('./Comments');

// Associations allow us to relate recipes to comments and comments to recipes
Recipes.hasMany(Comments, {
  foreignKey: 'recipe_id',
});

Comments.belongsTo(Recipes, {
  foreignKey: 'recipe_id',
});

module.exports = {
  User,
  Recipes,
  Comments,
};
