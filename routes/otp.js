import express from "express";
import {generateOTP, updateOTP ,deleteOTP} from "../controllers/otp.js";

const router = express.Router();

router.post("/generate", generateOTP);
router.route("/:otp_id").put(updateOTP).delete(deleteOTP);


export default router;