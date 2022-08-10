CREATE TABLE products
(
	id SERIAL PRIMARY KEY,
	name VARCHAR(50),
	description TEXT,
	image TEXT,
	price DECIMAL(10, 2),
	unit VARCHAR(10),
	currency VARCHAR(10),
	category VARCHAR(50),
	inventory FLOAT
);

INSERT INTO products (name, description, image, price, unit, currency, category, inventory) VALUES ('Apple', 'Nunquam promissio absolutio.', 'https://images.pexels.com/photos/1453713/pexels-photo-1453713.jpeg', 3, 'kg', 'USD', 'Fruit', 34523);
INSERT INTO products (name, description, image, price, unit, currency, category, inventory) VALUES ('Peach', 'Studere sensim ducunt ad emeritis caesium.', 'https://images.pexels.com/photos/5913179/pexels-photo-5913179.jpeg', 4, 'kg', 'USD', 'Fruit', 2346);
INSERT INTO products (name, description, image, price, unit, currency, category, inventory) VALUES ('Cherry', 'Cum burgus ridetis, omnes dominaes imperium festus, nobilis buboes.', 'https://images.pexels.com/photos/35629/bing-cherries-ripe-red-fruit.jpg', 3, 'kg', 'USD', 'Fruit', 3428);
INSERT INTO products (name, description, image, price, unit, currency, category, inventory) VALUES ('Orange', 'Humani generiss sunt rationes de altus cobaltum.', 'https://images.pexels.com/photos/2294477/pexels-photo-2294477.jpeg', 6, 'kg', 'USD', 'Fruit', 3492);
INSERT INTO products (name, description, image, price, unit, currency, category, inventory) VALUES ('Tomato', 'Rectors sunt calceuss de pius verpa.', 'https://images.pexels.com/photos/1367243/pexels-photo-1367243.jpeg', 2, 'kg', 'USD', 'Fruit', 23049);
INSERT INTO products (name, description, image, price, unit, currency, category, inventory) VALUES ('Pineapple', 'Sunt toruses transferre brevis, talis lapsuses.', 'https://images.pexels.com/photos/2469772/pexels-photo-2469772.jpeg', 1, 'kg', 'USD', 'Fruit', 192);
