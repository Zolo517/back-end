import { Router } from "express";
import {
  createUser,
  deleteUser,
  getUserById,
  getUsers,
  updateUser,
  updateUserInfo,
} from "../controllers/userController.js";

export const UserRouter = Router();

UserRouter.post("/", createUser)
  .get("/", getUsers)
  //   .get("user/:id", getUserById)
  .put("/:id", updateUser)
  .patch("/:id", updateUserInfo)
  .delete("/:id", deleteUser);
