import express from "express";
import morgan from "morgan";
import indexRoutes from "./routes/index.routes";
import path from "path";

const app = express();

// Settings
app.set("port", process.env.PORT || 6000);

// Middleware
app.use(morgan("dev"));
app.use(express.json());

// Routes
app.use("/api", indexRoutes);

// This folder for this application will be used to store public files
app.use("uploads", express.static(path.resolve("uploads")));

export default app;
