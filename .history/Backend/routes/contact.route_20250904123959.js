import express from "express";
import { sendContactMessage } from "../controllers/contact.controller.js";

const router = express.Router();

// POST /api/contact
router.post("/contact", sendContactMessage);

export default router;
