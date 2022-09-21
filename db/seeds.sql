USE project_2_db;

INSERT INTO recipes (id, title, time, description)
VALUES 
(1, 'Honey Siracha Whole Wings'),
(2, 'Bacon Wrapped Chorizo Poppers'),
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
