import express from "express";
import dotenv from "dotenv";

import cors from "cors";
import bodyParser from "body-parser";
import contactRoutes from "./routes/contact.route.js"; // we’ll create this next

dotenv.config();

const app = express();

// Middleware
app.use(cors({
    origin: "http://localhost:3000", // Adjust this to your frontend URL
}));
app.use(bodyParser.json());

// Routes
app.use("/api", contactRoutes);

// MongoDB connection
const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI;

mongoose
  .connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("✅ MongoDB connected");
    app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
  })
  .catch((err) => console.error("❌ MongoDB connection failed:", err));
