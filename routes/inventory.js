import express from "express";
import { addItem } from "../controllers/inventory.js";
import { removeItem } from "../controllers/inventory.js";
import { editItem } from "../controllers/inventory.js";

const router = express.Router();

router.post("/add", addItem);
router.delete("/delete/:id", removeItem);
router.put("/edit/:id", editItem);

export default router;