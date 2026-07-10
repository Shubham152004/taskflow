import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import taskRoutes from "./routes/taskRoutes.js"

dotenv.config();

const app =express();

const PORT =process.env.PORT || 5000;

//Middleware
app.use(cors());
app.use(express.json());

connectDB();

//Route
app.get("/",(req,res) => {
    res.send("TaskFlow Api is running");
});

app.use("/api/tasks", taskRoutes);

//Start Server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});