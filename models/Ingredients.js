// import important parts of sequelize library
const { Model, DataTypes } = require('sequelize');
// import our database connection from config.js
const sequelize = require('../config/connection');

// Initialize Product model (table) by extending off Sequelize's Model class
class Ingredients extends Model {}

// set up fields and rules for Product model
Ingredients.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    ingred_one: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    ingred_two: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    ingred_three: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    ingred_four: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    ingred_five: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    ingred_six: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    ingred_seven: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    ingred_eight: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  },
  {
    sequelize,
    timestamps: true,
    freezeTableName: true,
    underscored: true,
    modelName: 'ingredients',
  }
);

module.exports = Ingredients;
