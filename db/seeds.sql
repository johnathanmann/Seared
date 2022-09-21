USE project_2_db;

INSERT INTO recipes (id, title)
VALUES 
(1, 'Honey Siracha Whole Wings'),
(2, 'Bacon Wrapped Chorizo Poppers'),
(3, 'Hickory Smoked Salmon with Lemon Caper Sauce'),
(4, 'Beer Braised Spicy Pineapple Bratwurst')
(5, 'Grilled Artichokes with Pistachio Cream Sauce')

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
(9, 'slices')


INSERT INTO ingredients (ingredient, recipe_id, amount, unit_id)
VALUES
('whole chicken wings', 1),
('siracha', 1),
('honey', 1),
('salt', 1),
('coarse black pepper', 1),
('butter', 1),
()