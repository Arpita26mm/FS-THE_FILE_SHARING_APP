import express from "express";
import { uploadImage, getImage } from "../controllers/image-controller.js";
import upload from "../utils/upload.js"; //it is the multer middleware

const router = express.Router();

router.post("/upload", upload.single("file"), uploadImage); //post request->{post(path,middleware, controller)}

router.get("/file/:fileId", getImage);

export default router;
