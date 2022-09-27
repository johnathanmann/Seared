const sequelize = require('../config/connection');
const { User, Recipes, Comments } = require('../models');

const userData = require('./userData.json');
const recipeData = require('./recipeData.json');
const commentData = require('./commentData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });
  const recipes = await Recipes.bulkCreate(recipeData, {
    individualHooks: true,
    returning: true,
  });
  const comments = await Comments.bulkCreate(commentData, {
    individualHooks: true,
    returning: true,
  });

  console.info('Users Seeded:', users);
  console.info('Recipes Seeded:', recipes);
  console.info('Comments Seeded:', comments);

};

module.exports = seedDatabase;
