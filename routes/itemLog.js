import express from "express";
import { requestItem, updateItemStatus, returnItem, getItemLogs } from "../controllers/itemLog.js";

const router = express.Router();

router.post("/request", requestItem);
router.put("/update/:id", updateItemStatus);
router.post("/return", returnItem);
router.get("/logs", getItemLogs);

export default router;
