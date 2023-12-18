import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import PelayananRoute from "./routes/PelayananRoute.js";
import UlasanRoute from "./routes/UlasanRoute.js";
import SummaryRoute from "./routes/SummaryRoute.js";
import { v2 as cloudinary } from "cloudinary";

dotenv.config();

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_API_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
  secure: true,
});
const app = express();

app.use(cors());
app.use(express.json());
app.use(PelayananRoute);
app.use(UlasanRoute);
app.use(SummaryRoute);

app.listen(process.env.APP_PORT, () => {
  console.log(`Server up in ${process.env.APP_PORT}`);
});
