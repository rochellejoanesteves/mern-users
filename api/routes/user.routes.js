import express from "express";
import { createUser, getUsers, updateUser, deleteUser} from "../controllers/users.controller.js";
import { verifyToken } from "../utils/verifyUser.js";

const router = express.Router();

router.post("/create", verifyToken, createUser);
router.get("/getUsers", getUsers);
router.post("/update/:id", verifyToken, updateUser);
router.delete("/delete/:id", verifyToken, deleteUser);

export default router;
