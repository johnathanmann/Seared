// const { Recipes } = require('../models');

// // Finds random Recipe
// router.get('/recipe/random', async (req, res) => {
//   try {
//     // Gets recipe by number 1-5
//     const { dataValues } = await Recipes.findAll({
//       include: [
//         {
//           model: Comments,
//           as: 'comments',
//         },
//       ],
//     });
//     const randomNumber = Math.floor(Math.random() * dataValues.length);
//     console.log(dataValue[randomNumber]);
//     res.render('recipe', {
//       ...dataValues[randomNumber],
//       logged_in: req.session.logged_in,
//     });
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });
