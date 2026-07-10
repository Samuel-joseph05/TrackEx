import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { API_URL } from "../config.js";
import axios from "axios";

function ExpenseForm() {
  const [title, setTitle] = useState("Movie Night-Avengers");
  const [amount, setAmount] = useState(150);
  const [category, setCategory] = useState("Food");
  const [date, setDate] = useState("");
 

  const navigate = useNavigate();

 

  const handleSubmit = async (e) => {
    e.preventDefault();// Prevent page reload
   try {
      const res = await axios.post(`${API_URL}/expenses`, {
        title,
       amount: Number(amount),
        category,
        date,
      },{ withCredentials: true });
      console.log(res.data); // log response

      alert("Expense added successfully!");

      // Reset form fields after successful submission
      setTitle("");
      setAmount("");
      setCategory("Food");
      setDate("");

     
       navigate("/expenselist");
    } 
    catch(err) {
      console.log(err);
      alert("Failed to add expense!");
    }
  };
    
  
return (
    <div className="min-h-screen bg-gradient-to-br from-green-100 via-white to-green-50 flex items-center justify-center px-4">

  <form
    onSubmit={handleSubmit}
    className="w-full max-w-lg bg-white rounded-3xl shadow-2xl p-8"
  >
    {/* Header */}

    <div className="text-center mb-8">
      <h1 className="text-4xl font-bold text-green-700">
        Add Expense
      </h1>

      <p className="text-gray-500 mt-2">
        Record your daily expenses and stay on top of your finances.
      </p>
    </div>

    {/* Title */}

    <div className="mb-5">
      <label className="block mb-2 font-medium text-gray-700">
        Title
      </label>

      <input
        type="text"
        value={title}
        required
        onChange={(e) => setTitle(e.target.value)}
        placeholder="e.g. Grocery Shopping"
        className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:ring-2 focus:ring-green-500 transition"
      />
    </div>

    {/* Amount */}

    <div className="mb-5">
      <label className="block mb-2 font-medium text-gray-700">
        Amount (₹)
      </label>

      <input
        type="number"
        value={amount}
        required
        onChange={(e) => setAmount(e.target.value)}
        placeholder="Enter amount"
        className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:ring-2 focus:ring-green-500 transition"
      />
    </div>

    {/* Category */}

    <div className="mb-5">
      <label className="block mb-2 font-medium text-gray-700">
        Category
      </label>

      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:ring-2 focus:ring-green-500 transition"
      >
        <option>Food</option>
        <option>Travel</option>
        <option>Movie</option>
        <option>Gym</option>
        <option>Shopping</option>
        <option>Bills</option>
        <option>Other</option>
      </select>
    </div>

    {/* Date */}

    <div className="mb-8">
      <label className="block mb-2 font-medium text-gray-700">
        Date
      </label>

      <input
        type="date"
        value={date}
        required
        onChange={(e) => setDate(e.target.value)}
        className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:ring-2 focus:ring-green-500 transition"
      />
    </div>

    {/* Buttons */}

    <button
      type="submit"
      className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 rounded-xl shadow-lg transition"
    >
      + Add Expense
    </button>

    <div className="text-center mt-6">
      <a
        href="/expenselist"
        className="text-green-700 hover:underline font-medium"
      >
        View Expense List →
      </a>
    </div>

  </form>

</div>
  );
}

export default ExpenseForm;
