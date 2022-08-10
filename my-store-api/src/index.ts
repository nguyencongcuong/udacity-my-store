import { Request, Response } from 'express';
import express = require('express');
import productRoutes from './handlers/product';
import userRoutes from './handlers/user';
import orderRoutes from './handlers/order';
import cors = require('cors');

const port = process.env.PORT || 3000;

export const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/', (req: Request, res: Response) =>
	res.send(`Welcome to Nguyen Cong Cuong's API`)
);

productRoutes(app);
userRoutes(app);
orderRoutes(app);

app.listen(
	port,
	async (): Promise<void> => console.log(`Listening on port ${port}`)
);
