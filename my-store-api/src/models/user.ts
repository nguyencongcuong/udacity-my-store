import Client from '../database';
import { Secret } from 'jsonwebtoken';

const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

export type User = {
	id?: number;
	username: string;
	firstname: string;
	lastname: string;
	password?: string;
};

export type AuthenticatedUser = {
	username: string;
	token: string;
};

export class UserModel {
	async getAllUser(): Promise<User[] | undefined> {
		try {
			const conn = await Client.connect();
			const sql = `SELECT id, username, firstname, lastname
                   FROM users`;
			const result = await conn.query(sql);
			conn.release();
			return result.rows;
		} catch (e) {
			throw new Error('Cannot get users');
		}
	}

	async getUserByID(userID: string): Promise<User | undefined> {
		try {
			const conn = await Client.connect();
			const sql = `SELECT id, username, firstname, lastname
                   FROM users
                   WHERE id = ${userID}`;
			const result = await conn.query(sql);
			conn.release();
			return result.rows[0];
		} catch (e) {
			throw new Error(' Cannot get user');
		}
	}

	async createUser(user: User): Promise<User | undefined> {
		const { username, firstname, lastname, password } = user;
		try {
			const conn = await Client.connect();
			const sql =
				'INSERT INTO users (username, firstName, lastName, password) VALUES($1, $2, $3, $4) RETURNING *';
			const result = await conn.query(sql, [
				username,
				firstname,
				lastname,
				password,
			]);
			conn.release();
			return result.rows[0];
		} catch (e) {
			throw new Error(`Add user failed!!`);
		}
	}

	async isUserExisted(user: User): Promise<Boolean | undefined> {
		try {
			const users = await this.getAllUser();
			const flag = users?.find((item) => item.username === user.username);
			return !!flag;
		} catch (e) {
			throw new Error(`The system failed to check the user's existence`);
		}
	}

	async authenticate(
		username: string,
		password: string
	): Promise<AuthenticatedUser | null> {
		const conn = await Client.connect();
		const { PEPPER } = process.env;
		const sql = 'SELECT password FROM users WHERE username=($1)';
		const result = await conn.query(sql, [username]);
		if (result.rows.length) {
			const user = result.rows[0];
			if (bcrypt.compareSync(password + PEPPER, user.password)) {
				const { SECRET_JWT_TOKEN_KEY } = process.env;
				const token = jwt.sign({ user: user }, SECRET_JWT_TOKEN_KEY as Secret);
				return { username, token };
			}
		}
		return null;
	}
}
