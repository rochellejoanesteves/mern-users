import express from "express";
import { createUser, getUsers } from "../controllers/users.controller.js";
import { verifyToken } from "../utils/verifyUser.js";

const router = express.Router();

router.post("/create", verifyToken, createUser);
router.get("/getUsers", getUsers);

export default router;
