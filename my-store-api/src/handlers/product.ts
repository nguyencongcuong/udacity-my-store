import express, { Response, Request } from "express";
import { ProductModel } from "../models/product";
import Middleware from "../middlewares";

const store = new ProductModel();

const getAllProducts = async (req: Request, res: Response) => {
  try {
    const products = await store.getAllProducts();
    if (products) {
      products?.length > 0
        ? res.status(200).json(products)
        : res.send(`There's currently no product!`);
    }
  } catch (e) {
    res.json(e);
  }
};
const getProductByID = async (req: Request, res: Response) => {
  try {
    const products = await store.getProductByID(Number(req.params.id));
    res.json(products);
  } catch (e) {
    res.json(e);
  }
};
const getProductsByCategory = async (req: Request, res: Response) => {
  const category = req.params.category;
  try {
    const products = await store.getProductsByCategory(category);
    products?.length === 0
      ? res.send(`There is no product belongs to category: ${category}`)
      : res.json(products);
  } catch (e) {
    res.json(e);
  }
};
const deleteProductByID = async (req: Request, res: Response) => {
  try {
    const deletedProduct = await store.deleteProductByID(req.params.id);
    res.json(deletedProduct);
  } catch (e) {
    res.json(e);
  }
};
const addProduct = async (req: Request, res: Response) => {
  try {
    const addedProduct = await store.addProduct(req.body);
    res.json(addedProduct);
  } catch (e) {
    res.status(400);
    res.json(e);
  }
};

const productRoutes = (app: express.Application) => {
  app.get("/products", getAllProducts);
  app.get("/products/category/:category", getProductsByCategory);
  app.get("/product/:id", getProductByID);
  app.delete(
    "/product/delete/:id",
    Middleware.verifyAuthToken,
    deleteProductByID
  );
  app.post("/product", Middleware.verifyAuthToken, addProduct);
};

export default productRoutes;
