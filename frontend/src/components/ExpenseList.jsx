import { useEffect, useState } from "react";
import { API_URL } from "../config.js";
import axios from "axios";

function ExpenseList() {
  const [expenses, setExpenses] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchExpenses = async () => {
    setLoading(true);
    try {
      const res = await axios.get(`${API_URL}/expenses`, {
        withCredentials: true,
      });
       console.log(res.data);
   setExpenses(res.data || []);


    } catch (err) {
      console.error(err);
      setError("Failed to load expenses.");
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchExpenses();
  }, []);

  const handleDelete = async (id) => {
    if (!window.confirm("Delete this expense?")) return;
    try {
      await axios.delete(`${API_URL}/expenses/${id}`, {
        withCredentials: true,
      });
      // refresh list
      fetchExpenses();
    } catch (err) {
      console.error(err);
      alert("Failed to delete expense.");
    }
  };
  const handleClick = () => {

    window.history.back();
  }
  return (
   <div className="min-h-screen bg-gradient-to-br from-green-100 via-white to-green-50">

  <div className="max-w-6xl mx-auto px-6 py-10">

    {/* Header */}

    <div className="flex flex-col md:flex-row justify-between items-center mb-8">

      <div>
        <h1 className="text-4xl font-bold text-green-700">
          Expense History
        </h1>

        <p className="text-gray-500 mt-1">
          View and manage all your recorded expenses.
        </p>
      </div>

      <button
        onClick={handleClick}
        className="mt-4 md:mt-0 bg-green-600 hover:bg-green-700 text-white px-5 py-3 rounded-xl shadow transition"
      >
        ← Back
      </button>

    </div>

    {/* Loading */}

    {loading && (
      <div className="text-center text-lg font-medium py-10">
        Loading expenses...
      </div>
    )}

    {error && (
      <div className="bg-red-100 text-red-700 p-4 rounded-xl mb-5">
        {error}
      </div>
    )}

    {!loading && expenses.length === 0 && (
      <div className="bg-white rounded-2xl shadow-lg p-10 text-center">
        <h2 className="text-2xl font-semibold text-gray-700">
          No Expenses Yet
        </h2>

        <p className="text-gray-500 mt-2">
          Start by adding your first expense.
        </p>
      </div>
    )}

    {/* Expense Cards */}

    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">

      {expenses.map((e) => (

        <div
          key={e._id}
          className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl hover:-translate-y-1 transition"
        >

          <div className="flex justify-between items-start">

            <div>

              <h2 className="text-xl font-bold text-gray-800">
                {e.title}
              </h2>

              <p className="text-sm text-gray-500 mt-2">
                📅 {e.date
                  ? new Date(e.date).toLocaleDateString()
                  : "No Date"}
              </p>

              <span className="inline-block mt-3 bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm">
                {e.category}
              </span>

            </div>

            <div className="text-right">

              <h2 className="text-2xl font-bold text-red-500">
                ₹{e.amount}
              </h2>

            </div>

          </div>

          <button
            onClick={() => handleDelete(e._id)}
            className="w-full mt-6 bg-red-500 hover:bg-red-600 text-white py-2 rounded-xl transition"
          >
            Delete
          </button>

        </div>

      ))}

    </div>

  </div>

</div>

  );
}

export default ExpenseList;
