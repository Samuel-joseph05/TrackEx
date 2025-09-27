import { useState ,useEffect} from "react";
import { useNavigate } from "react-router-dom";
import { API_URL } from "../config.js";
import axios from "axios";

function ExpenseForm() {
  const [title, setTitle] = useState("Movie Night-Avengers");
  const [amount, setAmount] = useState(150);
  const [category, setCategory] = useState("ood");
  const [date, setDate] = useState("");
  const [loggedIn, setLoggedIn] = useState(false); // track login state

  const navigate = useNavigate();

   // Check login state on mount
  useEffect(() => {
    const token = document.cookie
      .split("; ")
      .find((row) => row.startsWith("accessToken="));
    setLoggedIn(!!token);
  }, []);

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
    } catch (err) {
      console.error(err);
      alert("Failed to add expense!");
    }
  };
    
  

  const handleLogin = () => {
    navigate("/login");
  };
  const handleSignUp = () => {
    navigate("/register");
  };

  return (
    <div className="">
      <h1 className="text-center text-3xl">TrackEx</h1>
      <div className="flex  gap-3   rounded-3xl  mx-3 my-3">
        <h1 className="text-2xl flex justify-center sm:"> ExpenseForm</h1>
            {/* Conditional buttons */}
      {!loggedIn && (
        <div className="flex gap-3 my-3">
          <button onClick={handleLogin} className="bg-red-600 rounded-sm px-4">
            Login
          </button>
          <button onClick={handleSignUp} className="bg-blue-600 rounded-2xl px-4">
            Sign Up
          </button>
        </div>
      )}
      {/* Show logout if logged in */}
{loggedIn && (
  <div className="flex gap-3 my-3">
    <span className="text-green-600 font-semibold">You are logged in</span>
    <button
      onClick={() => {
        document.cookie = "accessToken=; Max-Age=0; path=/;";
        document.cookie = "refreshToken=; Max-Age=0; path=/;";
        setLoggedIn(false);
        navigate("/login");
      }}
      className="bg-gray-600 text-white px-3 rounded"
    >
      Logout
    </button>
  </div>
)}
      </div>
      <form
        className="flex flex-col gap-3  shadow-xl p-5 rounded-3xl w-100 m-10 "
        onSubmit={handleSubmit}
      >
        <label htmlFor="title">Title : </label>
        <input
          name="title"
          value={title}
          required
          className=" border-b-2 focus:outline-hidden    "
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        <br></br>

        <label htmlFor="amount">Amount : </label>
        <span className="absolute left-2 top-1/3 mt-13 ml-10 ">₹</span>
        <input
          name="amount"
          value={amount}
          type="number"
          required
          className="border-b-2 focus:outline-hidden  "
          onChange={(e) => {
            setAmount(e.target.value);
          }}
        />
        <br></br>
        <label htmlFor="amount">Category : </label>
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="border p-1 ml-1"
        >
          <option>Food</option>
          <option>Travel</option>
          <option>Movie</option>
          <option>Gym</option>
          <option>Shopping</option>
          <option>Bills</option>
          <option>Other</option>
        </select>
        <br></br>

        <label htmlFor="date">Date :</label>
        <input
          name="date"
          value={date}
          type="date"
          required
          className="focus:outline-hidden  "
          onChange={(e) => {
            setDate(e.target.value);
          }}
        />
        <br></br>

        <button
          type="submit"
          className="   bg-blue-500 text-white p-2 ml-2  hover:bg-blue-700   rounded-3xl   "
        >
          Add Expense
        </button>
        <a href="/expenselist" className="text-blue-600 hover:underline">go to expenselist</a>
      </form>
    </div>
  );
}

export default ExpenseForm;
