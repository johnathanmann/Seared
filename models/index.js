const User = require('./User');
const Recipes = require('./Recipes');
const Units = require('./Units');
const Comments = require('./Comments');

//TODO Need to add belongs to information here
Recipes.hasMany(Comments, {
  foreignKey: 'comment_id',
});

module.exports = {
  User,
  Recipes,
  Units,
  Comments,
};
