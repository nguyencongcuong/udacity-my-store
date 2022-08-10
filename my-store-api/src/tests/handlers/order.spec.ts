import request = require('supertest');
import { app } from '../../index';

describe('[GET] /user/:userID/orders', () => {
	it('should return status 200', async () => {
		// Arrange
		const apiURL = '/user/1/orders';
		const token =
			'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7InBhc3N3b3JkIjoiJDJiJDEwJGdOQTdtUzRjeDRRSEw0TnFvaGw4RXViOW5RTU1BN3NWbUlKLzQyanpWSGhRSGh4WGhmOExDIn0sImlhdCI6MTY1NjAwOTMxNH0.3UoV1wPrKmLM1QmeSM5_IHvQbw0-9qLz8JQYkBrK-co';
		// Act
		request(app)
			.get(apiURL)
			.auth(token, { type: 'bearer' })
			.expect(200);
	});
});

describe('[GET] /user/:userID/completed-orders', () => {
	it('should return status 200', async () => {
		// Arrange
		const apiURL = '/user/2/orders';
		const token =
			'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7InBhc3N3b3JkIjoiJDJiJDEwJGdOQTdtUzRjeDRRSEw0TnFvaGw4RXViOW5RTU1BN3NWbUlKLzQyanpWSGhRSGh4WGhmOExDIn0sImlhdCI6MTY1NjAwOTMxNH0.3UoV1wPrKmLM1QmeSM5_IHvQbw0-9qLz8JQYkBrK-co';
		// Act
		request(app)
			.get(apiURL)
			.auth(token, { type: 'bearer' })
			.expect(200);
	});
});
