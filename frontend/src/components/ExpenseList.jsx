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
    <div className="p-6">
      <h2 className="text-3xl mb-4">Expenses</h2>
          <div className="my-6">
         <button onClick={handleClick}className="bg-blue-400 text-white px-1 py-1 rounded-sm">Back to Expense</button>
      </div>
             
      {loading && <div>Loading...</div>}
      {error && <div className="text-red-600">{error}</div>}
      {!loading && expenses.length === 0 && <div>No expenses found.</div>}

      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {expenses.map((e) => (
          <div key={e._id} className="border rounded-lg p-4 shadow-sm">
            <div className="flex justify-between items-start">
              <div>
              
                <h3 className="text-lg font-semibold p-1">{e.title || "No title"}</h3>
                <p className="text-xs text-gray-400 p-1"> {e.date ? new Date(e.date).toLocaleDateString() : "No date"}</p>
                 <p className="text-xs text-gray-400 p-1">{e.category || "No category"}</p>
              </div>
              <div className="text-right">
                <div className="text-xl font-bold">₹{e.amount || "No amount"}</div>
                <button
                  onClick={() => handleDelete(e._id)}
                  className="mt-3 px-2 py-1 text-sm border rounded text-red-600 hover:bg-red-50"
                >
                  Delete
                </button>
              </div>
            </div>
  
          </div>
        ))}
      </div>
      
    </div>
  );
}

export default ExpenseList;
