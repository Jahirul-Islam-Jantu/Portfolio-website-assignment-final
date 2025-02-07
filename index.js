import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import rateLimit from "express-rate-limit";
import helmet from "helmet";
import hpp from "hpp";
import cookieParser from "cookie-parser";
import router from "./routes/api.js";
import {
    MONGODB_CONNECTION,
    MAX_JSON_SIZE,
    URL_ENCODING,
    WEB_CACHE,
    REQUEST_LIMIT_NUMBER,
    REQUEST_LIMIT_TIME,
    corsOptions
} from "./src/config/config.js";

const app = express();

// Middleware
app.use(cors(corsOptions));
app.use(express.json({ limit: MAX_JSON_SIZE }));
app.use(express.urlencoded({ extended: URL_ENCODING }));
app.use(hpp());
app.use(helmet({ crossOriginResourcePolicy: false }));
app.use(cookieParser());

// Rate limiter
const limiter = rateLimit({ windowMs: REQUEST_LIMIT_TIME, max: REQUEST_LIMIT_NUMBER });
app.use(limiter);

// Web cache
app.set('etag', WEB_CACHE);

// MongoDB connection
console.log("Connecting to MongoDB...");
mongoose.connect(MONGODB_CONNECTION, { autoIndex: true })
    .then(() => console.log("Connected to MongoDB"))
    .catch(err => console.error("MongoDB connection error:", err));

// Routes
app.use("/api", router);

// File Upload
app.use('/file-upload', express.static('uploads'));

// Global error handler
app.use((err, req, res, next) => {
    console.error("Unhandled error:", err);
    res.status(500).json({ status: "failed", error: "Internal Server Error" });
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

export default app;