import multer from "multer";

const storage = multer.memoryStorage();
const upload = multer({ storage });

export const fileUploadMiddleware = upload.single("file");
