CREATE TABLE order_details
(
	id SERIAL PRIMARY KEY,
	order_id BIGINT REFERENCES orders (id),
	product_id BIGINT REFERENCES products (id),
	quantity FLOAT
);

INSERT INTO order_details (order_id, product_id, quantity)
VALUES (1, 1, 20000);
INSERT INTO order_details (order_id, product_id, quantity)
VALUES (1, 2, 52033);
