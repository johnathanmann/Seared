const sequelize = require('../config/connection');
const { User, Recipes } = require('../models');

const userData = require('./userData.json');
const recipeData = require('./recipeData.json');

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

  console.info('Users Seeded:', users);
  console.info('Recipes Seeded:', recipes);

  process.exit(0);
};

seedDatabase();
