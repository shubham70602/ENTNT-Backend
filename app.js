require("dotenv").config();
const express = require("express");
const connectDB = require("./db");
const cors = require("cors");

const app = express();

// Importing routes
const authRouter = require("./routes/auth");
const adminRouter = require("./routes/admin");
const userRouter = require("./routes/user");
const notificationsRouter = require("./routes/notifications");
const calendarRouter = require("./routes/calendar");

// Connect to the database
connectDB();

// Define the server port
const PORT = process.env.PORT || 3500;

// CORS configuration
app.use(
  cors({
    origin: [
      "https://entnt-frontend-five.vercel.app",
      "https://entnt-frontend-a01758bh9-shubh2.vercel.app", // Add the correct URL here
      "http://localhost:5173",
    ], // Valid frontend URLs
    methods: ["GET", "POST", "PATCH", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true, // Enable credentials if necessary
  })
);

// Handle preflight requests
app.options("*", cors());

// Middleware to parse JSON
app.use(express.json());

// API routes
app.use("/api/auth", authRouter);
app.use("/api/admin", adminRouter);
app.use("/api/user", userRouter);
app.use("/api/notifications", notificationsRouter);
app.use("/api/calendar", calendarRouter);

// Fallback for undefined routes
app.use((req, res, next) => {
  res.status(404).json({ error: "Route not found" });
});

// Global error handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: "Something went wrong!" });
});

// Start the server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
