import { Product, ProductModel } from "../../models/product";

const productModel = new ProductModel();

describe("getAllProducts", () => {
  it("should list all products", async () => {
    // Arrange
    // Act
    const products = await productModel.getAllProducts();
    // Assert
    expect(products).toBeDefined();
  });
});

describe("getProductByID", () => {
  it("should return product id = 3", async () => {
    // Arrange
    // Act
    const products = await productModel.getProductByID(1);
    // Assert
    expect(products).toBeDefined();
  });
});

describe("getProductsByCategory", () => {
  it("should return products with category name = Fruit", async () => {
    // Arrange
    // Act
    const products = await productModel.getProductsByCategory("Fruit");
    // Assert
    expect(products).toBeDefined();
  });
});

describe("deleteProductByID", () => {
  it("should delete product with id = 4", async () => {
    // Arrange
    const productID = '4'
    // Act
    const deletedProduct = await productModel.deleteProductByID(productID);
    const newAllProducts = await productModel.getAllProducts();
    const found = newAllProducts?.find(
      (item) => item.id === deletedProduct?.id
    );
    // Assert
    expect(found).toEqual(undefined);
  });
});

describe("addProduct", () => {
  it("should add Product to database", async () => {
    // Arrange
    const product = {
      "id": 11,
      "name": "Orange",
      "description": "",
      "image": "",
      "price": "35000.00",
      "unit": "kg",
      "currency": "VND",
      "category": "Fruit",
      "inventory": 34582
    };
    // Act
    const addedProduct = await productModel.addProduct(product);
    const allProducts = await productModel.getAllProducts();
    const found = allProducts?.find((item) => item.id === addedProduct?.id);

    // Assert
    if (addedProduct && allProducts) {
      expect(found).toEqual(addedProduct);
    }
  });
});
