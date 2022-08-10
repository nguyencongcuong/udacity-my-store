CREATE TABLE orders
(
	id SERIAL PRIMARY KEY,
	user_id BIGINT REFERENCES users (id),
	status TEXT,
	date TEXT
);

INSERT INTO orders (user_id, status, date)
VALUES (1, 'active', '2022-06-24T05:05:43.213Z');
INSERT INTO orders (user_id, status, date)
VALUES (2, 'completed', '2022-06-25T05:05:43.213Z');
INSERT INTO orders (user_id, status, date)
VALUES (3, 'completed', '2022-06-26T05:05:43.213Z');
INSERT INTO orders (user_id, status, date)
VALUES (1, 'active', '2022-06-26T05:05:43.213Z');
