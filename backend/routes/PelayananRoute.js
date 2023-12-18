import express from "express";
import {
  getPelayananById,
  getPelayanans,
  createPelayanan,
  deletePelayanan,
  updatePelayanan,
} from "../controllers/PelayananController.js";
import upload from "./multer.js";

const router = express.Router();

router.get("/pelayanan", getPelayanans);
router.get("/pelayanan/:id", getPelayananById);
// router.post("/pelayanan", createPelayanan);
router.post("/pelayanan", upload.single("image"), createPelayanan);
router.patch("/pelayanan/:id", upload.single("image"), updatePelayanan);
router.delete("/pelayanan/:id", deletePelayanan);

export default router;
