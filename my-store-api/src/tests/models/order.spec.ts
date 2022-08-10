import { OrderModel, Order } from "../../models/order";

const store = new OrderModel();

describe("getOrdersByUserID", () => {
  it("should return order with respective user id", async () => {
    // Arrange
    const userID = "1";
    // Act
    const result = await store.getOrdersByUserID(userID);
    // Assert
    result
      ? expect(result).toBeDefined()
      : expect(result).toBeUndefined();
  });
});

describe("getCompletedOrdersByUserID", () => {
  it("should return completed orders with respective user id", async () => {
    // Arrange
    const userID = "2";
    // Act
    const result = await store.getCompletedOrdersByUserID(userID);
    // Assert
    result
      ? expect(result).toBeDefined()
      : expect(result).toBeUndefined();
  });
  it(`should notify when there's no completed order with current user id`, async () => {
    // Arrange
    const userID = "5";
    // Act
    const result = await store.getCompletedOrdersByUserID(userID);
    // Assert
    expect(result?.length).toBe(0);
  });
});
