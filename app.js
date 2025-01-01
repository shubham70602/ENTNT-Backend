require("dotenv").config();
const express = require("express");
const connectDB = require("./db");
const cors = require("cors");

const app = express();

const authRouter = require("./routes/auth");
const adminRouter = require("./routes/admin");
const userRouter = require("./routes/user");
const notificationsRouter = require("./routes/notifications");
const calendarRouter = require("./routes/calendar");

connectDB();
const PORT = process.env.PORT || 3500;

// Correct CORS configuration
app.use(
  cors({
    origin: ["https://entnt-frontend-five.vercel.app", "http://localhost:3000"], // Add valid frontend URLs
    methods: ["GET", "POST", "PATCH", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true, // Optional: Include credentials if needed
  })
);

app.options("*", cors()); // Handle preflight requests

app.use(express.json());

// API routes
app.use("/api/auth", authRouter);
app.use("/api/admin", adminRouter);
app.use("/api/user", userRouter);
app.use("/api/notifications", notificationsRouter);
app.use("/api/calendar", calendarRouter);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
