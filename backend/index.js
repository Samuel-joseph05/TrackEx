import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import jwt from "jsonwebtoken";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";

import User from "./models/User.js";
import Expense from "./models/Expense.js";

dotenv.config();

const app = express();

// Middleware
app.use(cookieParser());
app.use(express.json());
app.use(
  cors({
    origin: ["http://localhost:5173"], // your frontend URL
    credentials: true,
  })
);

const PORT = process.env.PORT || 5000;

// MongoDB connection
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("MongoDB connection error:", err));

// ------------------------
// Routes without auth
// ------------------------

// Register
app.post("/register", async (req, res) => {
  const { name, email, password } = req.body;
  try {
    await User.create({ name, email, password });
    res.status(201).json({ message: "Successfully registered" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Login
app.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) return res.status(404).json({ message: "User not found" });

    if (user.password !== password)
      return res.status(401).json({ message: "Incorrect password" });

    // JWT tokens
    const accessToken = jwt.sign({ email }, "jwt-access-token-SecretKey", {
      expiresIn: "1m",
    });
    const refreshToken = jwt.sign({ email }, "jwt-refresh-token-SecretKey", {
      expiresIn: "5m",
    });

    // Set cookies
    res.cookie("accessToken", accessToken, { maxAge: 60000, httpOnly: true });
    res.cookie("refreshToken", refreshToken, {
      maxAge: 300000,
      httpOnly: true,
      secure: false, // set true in production with HTTPS
      sameSite: "strict",
    });

    res.json({ login: true });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// ------------------------
// Auth Middleware
// ------------------------

const verifyUser = async (req, res, next) => {
  const accessToken = req.cookies.accessToken;

  if (!accessToken) {
    const renewed = await renewToken(req, res);
    if (!renewed) return; // renewToken already sent response
    next();
    return;
  }

  try {
    const decoded = jwt.verify(accessToken, "jwt-access-token-SecretKey");
    const user = await User.findOne({ email: decoded.email });
    if (!user) return res.status(404).json({ message: "User not found" });

    req.userId = user._id; // set userId for Expense
    next();
  } catch (err) {
    return res.status(401).json({ valid: false, message: "Session expired" });
  }
};

const renewToken = async (req, res) => {
  const refreshToken = req.cookies.refreshToken;
  if (!refreshToken) {
    res.status(401).json({ valid: false, message: "User not authenticated" });
    return false;
  }

  try {
    const decoded = jwt.verify(refreshToken, "jwt-refresh-token-SecretKey");
    const accessToken = jwt.sign({ email: decoded.email }, "jwt-access-token-SecretKey", {
      expiresIn: "1m",
    });
    res.cookie("accessToken", accessToken, { maxAge: 60000, httpOnly: true });
    return true;
  } catch (err) {
    res.status(401).json({ valid: false, message: "Invalid refresh token" });
    return false;
  }
};

// ------------------------
// Protected Routes
// ------------------------

// Dashboard
app.get("/dashboard", verifyUser, (req, res) => {
  res.json({ valid: true, message: "Authorized User" });
});

// Add expense
app.post("/expenses", verifyUser, async (req, res) => {
  const { title, amount, category, date } = req.body;

  if (!title || !amount || !category || !date)
    return res.status(400).json({ message: "All fields are required" });

  try {
    const newExpense = await Expense.create({
      title,
      amount,
      category,
      date,
      user: req.userId,
    });

    res.status(201).json({ message: "Expense added successfully", expense: newExpense });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
});

// Get expenses for logged-in user
app.get("/expenses", verifyUser, async (req, res) => {
  try {
    const expenses = await Expense.find({ user: req.userId });
    res.json(expenses);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
});
app.delete("/expenses/:id", verifyUser,async(req,res)=>{
try{
  const {id} = req.params;
  await Expense.findByIdAndDelete(id);
   res.json({ message: "Expense deleted" });
}
catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
})

// ------------------------
// Start Server
// ------------------------
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
