import mongoose from "mongoose";

const expense = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User", // Reference to User model
    required: true,
  },
  title: {
    type: String,
    required: true,
    trim: true,
  },
  amount: {
    type: Number,
    required: true,
    min: 0,
  },
  category: {
    type: String,

    default: "Others",
  },
  date: {
    type: Date,
    default: Date.now,
  },
});
export default mongoose.model("Expense", expenseSchema);
