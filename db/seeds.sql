USE project_2_db;

INSERT INTO recipes (id, title, time, description)
VALUES 
(1, 'Honey Siracha Whole Wings', 45,
'Rinse whole chicken wings with cold water. Pat dry with paper towels to remove as much moisture from the skin as possible. If time is not an issue place wings on a drying rack and refridgerate uncovered for 30 minutes to an hour. The dryer the skin the crispier the wing! For gas grills use a 2 zone heating method, with half of your grill low for indirect heat, and the other half on high. Charcoal/kettle grills only have coals on one side or you can use a vortex method and make a pile in the middle and place your meat in a circle around the outside edge of the cooking grate. After drying, lightly coat your wings with an oil of your choice. You may also use cooking spray, many people prefer it. Generously coat your wings with salt and coarse pepper, remeber not to rub! only pat as your distribute your seasoning. Once seasoned evenly place your wings on the indirect side and cook (covered) for 10-15 minutes, flip wings and cook another 10-15 minute or until your skin turns golden brown. At this point we are ready for your sauce! 1 cup siracha, 1/3 cup butter, and 1/3 cup honey. You can tweak this however you like. After cooking wings 10-15 minutes indirect on both sides grab a large mixing bowl to toss your wings in the sauce or you may choose to use a brush (large bowl is much easier). Once your wings are coated place over the DIRECT heat side (uncovered). This will carmelize your sauce, and give an amazing char taste, and texture. How much time is completely up to you but for a mild to decent char you should only cook for a minute or so on each side depending on the intensity of your fire. Your wings should now be cooked and charred to perfection. Use left over sauce to re-toss before serving or drizzle on top along with some black sesame seed for eye catching presentation.')

(2, 'Bacon Wrapped Chorizo Poppers', 40, 
'Start by slicing your jalapenos in half, removing seeds, and as much as the inner walls as possible. Brown the chorizo in a skillet or use a cast iron on your grill until cooked. Drain with strainer or paper towel, and set aside. In a large bowl combine your cream cheese, chorizo, shredded cheddar, and a generous amount of your favorite BBQ, or all purpose rub. '),
(3, 'Beer Braised Spicy Pineapple Bratwurst'),
(4, 'Hickory Smoked Salmon with Lemon Caper Sauce'),
(5, 'Grilled Artichokes with Pistachio Cream Sauce');

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
