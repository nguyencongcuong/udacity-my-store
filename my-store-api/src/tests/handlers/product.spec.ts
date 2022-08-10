import request = require('supertest');
import { app } from '../../index';

describe('[GET] /products', () => {
	it('should return status 200', async () => {
		// Arrange
		const apiURL = '/products';
		// Act
		request(app).get(apiURL).expect(200);
	});
});

describe('[GET] /product/:id', () => {
	it('should return status 200', async () => {
		// Arrange
		const apiURL = '/product/1';
		// Act
		request(app).get(apiURL).expect(200);
	});
});

describe('[GET] /products/category/:category', () => {
	it('should return status 200', async () => {
		// Arrange
		const apiURL = '/products/category/Fruit';
		// Act
		request(app).get(apiURL).expect(200);
	});
});

describe('[DELETE] /product/delete/:id', () => {
	it('should return status 200', async () => {
		// Arrange
		const apiURL = '/product/delete/5';
		// Act
		request(app).get(apiURL).expect(200);
	});
});

describe('[POST] /product', () => {
	it('should return status 200', async () => {
		// Arrange
		const apiURL = '/product';
		// Act
		request(app).get(apiURL).expect(200);
	});
});
