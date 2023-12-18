import express from "express";
import { getSummaries } from "../controllers/SummaryController.js";

const router = express.Router();

router.get("/summaries", getSummaries);

export default router;
