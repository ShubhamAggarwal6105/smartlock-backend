import express from "express";
import { getAllUsers, registerUser } from "../controllers/user.js";

const router = express.Router();

router.get("/all", getAllUsers);
router.post("/new", registerUser);

export default router;