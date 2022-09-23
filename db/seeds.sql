USE project_2_db;

INSERT INTO recipes (id, title, time, description)
VALUES 
(1, 'Honey Siracha Whole Wings', 45,
'Rinse whole chicken wings with cold water. Pat dry with paper towels to remove as much moisture from the skin as possible. If time is not an issue place wings on a drying rack and refridgerate uncovered for 30 minutes to an hour. The dryer the skin the crispier the wing! For gas grills use a 2 zone heating method, with half of your grill low for indirect heat, and the other half on high. Charcoal/kettle grills only have coals on one side or you can use a vortex method and make a pile in the middle and place your meat in a circle around the outside edge of the cooking grate. After drying, lightly coat your wings with an oil of your choice. You may also use cooking spray, many people prefer it. Generously coat your wings with salt and coarse pepper, remeber not to rub! only pat as your distribute your seasoning. Once seasoned evenly place your wings on the indirect side and cook (covered) for 10-15 minutes, flip wings and cook another 10-15 minute or until your skin turns golden brown. At this point we are ready for your sauce! 1 cup siracha, 1/3 cup butter, and 1/3 cup honey. You can tweak this however you like. After cooking wings 10-15 minutes indirect on both sides grab a large mixing bowl to toss your wings in the sauce or you may choose to use a brush (large bowl is much easier). Once your wings are coated place over the DIRECT heat side (uncovered). This will carmelize your sauce, and give an amazing char taste, and texture. How much time is completely up to you but for a mild to decent char you should only cook for a minute or so on each side depending on the intensity of your fire. Your wings should now be cooked and charred to perfection. Use left over sauce to re-toss before serving or drizzle on top along with some black sesame seed for eye catching presentation.'),

(2, 'Bacon Wrapped Chorizo Poppers', 40, 
'Start by slicing your jalapenos in half, removing seeds, and as much as the inner walls as possible. Brown the chorizo in a skillet or use a cast iron on your grill until cooked. Drain with strainer or paper towel, and set aside. In a large bowl combine your cream cheese, chorizo, shredded cheddar, and a generous amount of your favorite BBQ, or all purpose rub. Use a spoon to scoop filling into each jalapeno half. Arrange your bacon onto a cutting board and cut in half, then wrap each jalapeno half with once half slice of bacon. Use a tooth pick to hold in place if needed. Now that our poppers are prepped place them in your freezer will you fire up your grill. This will help harden are filling a little bit and prevent leaking during our cook. Cook indirect on medium heat (350-375, covered), for 15-20 minutes. Finish with a quick char over direct heat or use an elevated grill rack if you have one. Please make sure to allow popper to cool for several minutes before eating, and enjoy! These are sure to be a family, and tailgate favorite!'),

(3, 'Beer Braised Spicy Pineapple Bratwurst', 35,
'Rough chop one onion, 4 cloves of garlic, 2 jalapenos, and 1 bell pepper of your choice. Add to a large pot, and carmelize with one tablespoon of olive oil and pinch of salt. Once carmleized add your brats, along with your favorite beer (just enough to submerge your brats) and one small can of pineapple juice or pineapple chunks. Throw in a tablespoon of black pepper, and cayenne powder as well and bring to a boil. Once your pot has reached a boil turn down to low simmer while you get your grilled fired up. Once your grill has reached medium high heat, sear each side of your brats over direct heat for about a minute or 2 each side for the perfect grill marks. Place inside your favorite bun, top off with your carmelized peppers, onions. Add some cojita cheese and cilantro and now you have unique take on an old favorite everyone is sure to love! '),

(4, 'Hickory Smoked Salmon with Lemon Caper Sauce', 70, 
'Pre heat your grill indirectly to 225 degrees. Pat dry your salmon and season both sides of your filet with salt and pepper. Spreading evenly, and only patting if needed. No rubbing. Depending on how much smoke you desire place 1 to 3 small hickory chunks directly over your coals, this will ensure you have clean smoke and no smoldering. Place your salmon over the indirect side, skin down, cover and cook for about 50 minutes. Remove salmon once you have reached an internal temperature of 125 and place on a baking sheet. Cool salmon to room temperature and use immediately or move to the refridgerator. No its time for our sauce! In a small bowl use 1 cup of mayonnaise and combine with a table spoon of capers, 1 tablespoon of horseraddish, a splash of olive oil, 1 teaspoon of salt, 1 teaspoon of black pepper, 1 teaspoon of dill, and the juice from one half of lemon. Serve along side your salmon and feel free to garnish your filet with any left over capers, lemon, and a sprinkle of dill on top. Enjoy! '),

(5, 'Grilled Artichokes with Pistachio Cream Sauce', 70, 
'Clean artichokes in a large pot of water and lemon. Use kitchen shears to trim off tips. Use a chefs knife to cut away the top inch of your artichoke as well as a half inch from the bottom stem. Peel off tough outer leaves near the stem and use a paring knife or peeler to remove the fibrous skin on the remaining stem. Cut artichoke in half lengthwise and remove furry choke center with a spoon. Remove all purple inner leaves. Rinse under cold water, cleaning out the area surrounding the choke and between the outer leaves. Place cleaned artichokes into lemon water and clean remaining artichokes. Once finished add a small handful of salt to your pot and bring to a boil. Lower heat to medium and cook, covered, until stems are knife-tender, about 15 minutes. Drain and cool. Meanwhile, in a small saucepan over medium-low heat, heat oil and garlic until garlic turns lightly golden. Remove from heat immediately and sprinkle salt on garlic chips. Set aside. Make the yogurt sauce: In a food processor, process pistachios with salt until very finely ground, then drizzle in oil until smooth paste forms. Transfer to a medium bowl and fold in yogurt and lemon juice. Make the pistachio topping: In a small skillet over medium heat, toast coriander, sesame, salt, and pepper until fragrant and lightly golden, about 1 minute. Transfer to a small bowl and mix in pistachios, salt, and pepper. Preheat grill to medium heat. Brush artichokes with garlic oil all over and lightly season with salt and pepper. Place cut-side down on grill and cook until lightly charred on one side, 5 to 7 minutes. Flip and continue to cook until charred on second side, 5 minutes more. Serve artichokes with a squeeze of lemon, a dollop of yogurt sauce, and a sprinkle of pistachio topping and crushed garlic chips and enjoy!'

INSERT INTO units (id, title)
VALUES
(1, 'pounds'),
(2, 'cups'),
(3, 'tablespoons'),
(4, 'teaspoons'),
(5, 'pinch'),
(6, 'cans'),
(7, 'ounces'),
(8, 'splash'),
(9, 'slices');


INSERT INTO ingredients (ingredient, recipe_id, amount, unit_id)
VALUES
('whole chicken wings', 1),
('siracha', 1),
('honey', 1),
('salt', 1),
('black sesame seed', 1),
('coarse black pepper', 1),
('butter', 1),
('bacon', 2),
('chorizo', 2),
('jalapenos', 2),
('cream cheese', 2),
('shredded cheddar', 2),
('BBQ rub', 2),
('bratwurst', 3),
('buns' 3),
('Beer', 3),
('yellow onion', 3),
('bell peppers', 3),
('pineapple', 3),
('cilantro', 3),
('cojita chesse', 3),
('pineapple juice', 3),
('salmon', 4),
('hickory wood', 4),
('brown sugar', 4),
('lemons', 4),
('capers', 4),
('horseradish', 4),
('mayonnaise', 4),
('dill', 4),
('olive oil', 4),
('whole artichoke', 5),
('garlic', 5),
('pistachios', 5),
('greek yogurt', 5),
('corriander', 5),
('white sesame seed', 5);