import express, { Response, Request } from 'express';
import { OrderModel } from '../models/order';
import Middleware from '../middlewares/index';

const store = new OrderModel();

const getOrdersByUserID = async (req: Request, res: Response) => {
	try {
		const orders = await store.getOrdersByUserID(req.params.userID);
		if (orders) {
			orders?.length > 0
				? res.status(200).json(orders)
				: res.send(`There is no order for user ${req.params.userID}`);
		}
	} catch (e) {
		res.json(e);
	}
};
const getCompletedOrdersByUserID = async (req: Request, res: Response) => {
	try {
		const completedOrders = await store.getCompletedOrdersByUserID(
			req.params.userID
		);
		if (completedOrders) {
			completedOrders?.length > 0
				? res.status(200).json(completedOrders)
				: res.send(`No completed order for user ${req.params.userID}.`);
		}
	} catch (e) {
		res.json(e);
	}
};

const orderRoutes = (app: express.Application) => {
	app.get(
		'/user/:userID/orders',
		Middleware.verifyAuthToken,
		getOrdersByUserID
	);
	app.get(
		'/user/:userID/completed-orders',
		Middleware.verifyAuthToken,
		getCompletedOrdersByUserID
	);
};

export default orderRoutes;
