import { Router } from "express";
import { getAllUsers } from "../controllers/user.get.controller";
import {
  loginUserByEmail,
  postUser,
} from "../controllers/user.post.controller";
import { checkEmailAlreadyRegister } from "../middleware/checkEmail";

const userRoutes = Router();

userRoutes.get("/api/users", getAllUsers);
userRoutes.post("/api/login", loginUserByEmail);
userRoutes.post("/api/register", checkEmailAlreadyRegister, postUser);

export default userRoutes;
