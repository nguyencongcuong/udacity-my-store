import express, { Response, Request } from "express";
import { User, UserModel } from "../models/user";
import Middleware from "../middlewares";

const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const store = new UserModel();

const getAllUsers = async (req: Request, res: Response) => {
  try {
    const users = await store.getAllUser();
    if (users) {
      users?.length > 0
        ? res.json(users)
        : res.send(`There's currently no users!`);
    }
  } catch (e) {
    res.json(e);
  }
};
const getUserByID = async (req: Request, res: Response) => {
  try {
    const user = await store.getUserByID(req.params.id);
    res.json(user);
  } catch (e) {
    res.json(e);
  }
};
const createUser = async (req: Request, res: Response) => {
  const isUserExisted = await store.isUserExisted(req.body);
  if (isUserExisted) {
    return res.send("This user is existed. Please choose another username.");
  }
  const { SALT, PEPPER, SECRET_JWT_TOKEN_KEY } = process.env;
  const { username, firstName, lastName, password } = req.body;
  const user: User = {
    username,
    firstname: firstName,
    lastname: lastName,
    password: bcrypt.hashSync(password + PEPPER, Number(SALT))
  };
  try {
    const newUser = await store.createUser(user);
    const token = jwt.sign({ user: newUser }, SECRET_JWT_TOKEN_KEY);
    res.json({ username, firstName, lastName, token });
  } catch (e) {
    res.json(e);
  }
};
const authenticate = async (req: Request, res: Response) => {
  try {
    const { username, password } = req.body;
    const user = await store.authenticate(username, password);
    user ? res.json(user) : res.send("No authentication");
  } catch (e) {
    res.json(e);
  }
};

const userRoutes = (app: express.Application) => {
  app.get("/users", Middleware.verifyAuthToken, getAllUsers);
  app.get("/user/:id", Middleware.verifyAuthToken, getUserByID);
  app.post("/user", createUser);
  app.post("/user/auth", authenticate);
};

export default userRoutes;
