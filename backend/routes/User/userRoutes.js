import express from "express";
import { verifyStudentController } from "../../controllers/User/verifyStudentController.js";
import multer from "multer";
import { fileUploadAndVerifyController } from "../../controllers/User/fileUploadAndVerifyController.js";

const router = express.Router();

router.post("/verifyStudent", verifyStudentController);
const upload = multer({ dest: "uploads/" });

router.post("/upload-pdf", upload.single("pdf"), fileUploadAndVerifyController);

export default router;
