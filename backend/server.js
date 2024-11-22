import express from "express";
import morgan from "morgan";
import cors from "cors";
import dotenv from "dotenv";
import ConnectDB from "./config/database";

dotenv.config();
ConnectDB();

app.use(
  cors({
    origin: process.env.FRONTEND_URI || "http://localhost:3000",
    methods: ["GET", "POST", "PUT", "DELETE"],
  })
);

const app = express();
app.use(express.json());
app.use(morgan("dev"));

const PORT = process.env.PORT || 8080;

app.listen(port, () => {
  console.log(`Server is running on port ${PORT}`);
});
