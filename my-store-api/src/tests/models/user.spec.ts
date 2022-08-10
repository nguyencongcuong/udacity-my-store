import { UserModel, User } from '../../models/user';

const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const userModel = new UserModel();

describe('getAllUsers', () => {
	it('should list all products', async () => {
		// Arrange
		const expectedResult: User[] = [
			{
				id: 1,
				username: 'cuongnc.fe',
				firstname: 'Cuong',
				lastname: 'Nguyen',
			},
			{
				id: 2,
				username: 'anhnln',
				firstname: 'Anh',
				lastname: 'Nguyen',
			},
			{
				id: 3,
				username: 'tobokki',
				firstname: 'Tobo',
				lastname: 'Ki',
			},
		];
		// Act
		const users = await userModel.getAllUser();
		// Assert
		expect(users).toEqual(expectedResult);
	});
});

describe('getUserByID', () => {
	it('should get user with id = 3', async () => {
		// Arrange
		const expectedResult: User = {
			id: 3,
			username: 'tobokki',
			firstname: 'Tobo',
			lastname: 'Ki',
		};
		// Act
		const user = await userModel.getUserByID('3');
		// Assert
		expect(user).toEqual(expectedResult);
	});
});

describe('createUser', () => {
	it('should create a new user with relative information', async () => {
		// Arrange
		const newUser: User = {
			username: 'john.dom',
			firstname: 'John',
			lastname: 'Dom',
		};
		// Act
		const user = await userModel.createUser(newUser);
		const users = await userModel.getAllUser();
		const found = users?.find((item) => item.id === user?.id);
		// Assert
		expect(found?.username).toBe(user?.username);
	});
});

describe('authenticate', () => {
	it('should authenticate user and return the valid jwt token', async () => {
		// Arrange
		const user = {
			username: 'cuongnc.fe',
			password: 'password123',
		};
		// Act
		const res = await userModel.authenticate(user.username, user.password);
		const decoded = await jwt.verify(
			<string>res?.token,
			process.env.SECRET_JWT_TOKEN_KEY,
			{ complete: true }
		);
		const flag = bcrypt.compareSync(
			user.password + process.env.PEPPER,
			decoded.payload.user.password
		);
		// Assert
		expect(res?.token).toBeTruthy();
		expect(flag).toBe(true);
	});
});
