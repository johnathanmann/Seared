const User = require('./User');
const Recipes = require('./Recipes');
const Comments = require('./Comments');

Recipes.hasMany(Comments, {
  foreignKey: 'recipe_id',
});

Comments.belongsTo(Recipes, {
  foreignKey: 'recipe_id',
});

module.exports = {
  User,
  Recipes,
  Comments
};
