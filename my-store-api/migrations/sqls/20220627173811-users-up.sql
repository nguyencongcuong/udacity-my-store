CREATE TABLE users
(
	id SERIAL PRIMARY KEY,
	username VARCHAR(25),
	firstName VARCHAR(25),
	lastName VARCHAR(25),
	password TEXT
);

INSERT INTO users (username, firstName, lastName, password)
VALUES ('cuongnc.fe', 'Cuong', 'Nguyen', '$2b$10$gNA7mS4cx4QHL4Nqohl8Eub9nQMMA7sVmIJ/42jzVHhQHhxXhf8LC');
INSERT INTO users (username, firstName, lastName, password)
VALUES ('anhnln', 'Anh', 'Nguyen', '$2b$10$YnsUB3Db4JWzYRhlV/wRsOv/cBqFQKwmgATv0oKsyX2BTABXlk7du');
INSERT INTO users (username, firstName, lastName, password)
VALUES ('tobokki', 'Tobo', 'Ki', '$2b$10$4/xn.8T.1lhj8PvPoO6ZzeWJ071iPsqvn7rrHL/MKV1ofwLNJdi/e');
