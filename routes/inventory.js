import express from "express";
import { addItem } from "../controllers/inventory.js";

const router = express.Router();

router.post("/add", addItem);

export default router;