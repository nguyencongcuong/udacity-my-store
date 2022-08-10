import Client from "../database";
import { ENUM } from "../constants/enum";

export type Order = {
  id?: number;
  user_id: string;
  status: string;
  date: string;
  orderDetails: OrderDetail[]
};

export type OrderDetail = {
  id: number;
  product_id: string;
  quantity: number;
}

export class OrderModel {
  async getOrdersByUserID(userID: string): Promise<Order[] | undefined> {
    try {
      const conn = await Client.connect();
      const sqlOrder = `SELECT * FROM orders WHERE user_id='${userID}'`;
      const order = await conn.query(sqlOrder);
      const orderData = order.rows;

      for (let i = 0; i < orderData.length; i++) {
        const sql = `SELECT id, product_id, quantity FROM order_details WHERE order_id='${orderData[i].id}'`;
        const productSql = await conn.query(sql);
        orderData[i].orderDetails = productSql.rows;
      }

      conn.release();

      return orderData;
    } catch (e) {
      throw new Error(`Cannot get the orders for user ${userID}`);
    }
  }

  async getCompletedOrdersByUserID(
    userID: string
  ): Promise<Order[] | undefined> {
    try {
      const conn = await Client.connect();
      const sqlOrder = `SELECT * FROM orders WHERE user_id='${userID}' AND status='${ENUM.ORDER.STATUS.COMPLETED}'`;
      const order = await conn.query(sqlOrder);
      const orderData = order.rows;

      for (let i = 0; i < orderData.length; i++) {
        const sql = `SELECT id, product_id, quantity FROM order_details WHERE order_id='${orderData[i].id}'`;
        const productSql = await conn.query(sql);
        orderData[i].orderDetails = productSql.rows;
      }

      conn.release();

      return orderData;
    } catch (e) {
      throw new Error(`Cannot get the orders for user ${userID}`);
    }
  }
}
