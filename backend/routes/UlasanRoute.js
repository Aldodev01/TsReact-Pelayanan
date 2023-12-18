import express from "express";
import {
  getUlasan,
  getUlasanById,
  createUlasan,
  updateUlasan,
  deleteUlasan,
} from "../controllers/UlasanController.js";

const router = express.Router();

router.get("/ulasan", getUlasan);
router.get("/ulasan/:id", getUlasanById);
router.post("/ulasan", createUlasan);
router.patch("/ulasan/:id", updateUlasan);
router.delete("/ulasan/:id", deleteUlasan);

export default router;
