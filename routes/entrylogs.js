import express from 'express';
import { issueOTP, deleteLog } from '../controllers/entrylogs.js';

const router = express.Router();

router.post('/issue', issueOTP);
router.delete('/delete/:id', deleteLog);

export default router;
