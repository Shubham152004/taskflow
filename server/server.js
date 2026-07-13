import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import taskRoutes from "./routes/taskRoutes.js"
import authRoutes from "./routes/authRoutes.js"

dotenv.config();
console.log("JWT_SECRET:", process.env.JWT_SECRET);

const app =express();

const PORT =process.env.PORT || 5000;

//Middleware
app.use(cors(cors({
    origin: [
      "http://localhost:5173",
      "https://taskflow-ebon-alpha.vercel.app",
    ],
    credentials: true,
  })));
app.use(express.json());

connectDB();

//Route
app.get("/",(req,res) => {
    res.send("TaskFlow Api is running");
});

app.use("/api/tasks", taskRoutes);
app.use("/api/auth", authRoutes);

//Start Server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});