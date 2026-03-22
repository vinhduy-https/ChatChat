import express from 'express';
import dotenv from 'dotenv';
import { connectDB } from "./libs/db.js";
import authRoute from "./routes/authRoute.js";
import userRoute from "./routes/userRoute.js";
// import friendRoute from "./routes/friendRoute.js";
// import messageRoute from "./routes/messageRoute.js";
// import conversationRoute from "./routes/conversationRoute.js";
import cookieParser from "cookie-parser";
import { protectedRoute } from "./middlewares/authMiddleware.js";
// import cors from "cors";
// import swaggerUi from "swagger-ui-express";
// import fs from "fs";
// import { app, server } from "./socket/index.js";
// import { v2 as cloudinary } from "cloudinary";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5001;

app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", authRoute);
app.use(protectedRoute);
app.use("/api/users", userRoute);

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`server bắt đầu trên cổng ${PORT}`);
  });
});