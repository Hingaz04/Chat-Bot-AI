import express from "express";
import { config } from "dotenv";
import morgan from "morgan";
import appRouter from "./routes/index.js";
import cookieParser from "cookie-parser";
import cors from "cors";
config();
const app = express();
// 1. Correct the origin in cors options
app.use(cors({ origin: "http://localhost:5173", credentials: true }));
app.use(cookieParser(process.env.COOKIE_SECRET));
// Middlewares
app.use(express.json());
// 2. Conditionally enable morgan only in development environment
if (process.env.NODE_ENV === "development") {
    app.use(morgan("dev"));
}
app.use("/api/v1", appRouter);
export default app;
//# sourceMappingURL=app.js.map