import dotenv from "dotenv";
import connectDB from "./backend/config/db.js";

dotenv.config();

connectDB();
