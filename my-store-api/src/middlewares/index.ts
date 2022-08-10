import { NextFunction, Request, Response } from 'express';

const jwt = require('jsonwebtoken');

class Middleware {
	public verifyAuthToken(req: Request, res: Response, next: NextFunction) {
		try {
			const authorizationHeader = req.headers.authorization;
			!authorizationHeader && res.send(401);
			const token = authorizationHeader?.split(' ')[1];
			jwt.verify(token, process.env.SECRET_JWT_TOKEN_KEY);
			next();
		} catch (error) {
			res.status(401);
		}
	}
}

export default new Middleware();
