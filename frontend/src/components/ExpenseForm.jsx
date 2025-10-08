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
    <div className="">
 
      <form
        className="flex flex-col gap-3  shadow-xl p-7  rounded-3xl w-65 ml-4 "
        onSubmit={handleSubmit}
      >
          <div className=" mb-4  ">
        <h1 className="text-2xl flex justify-center sm:"> ExpenseForm</h1>

      </div>
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
        {/* <span className="absolute left-2 top-1/3 mt-4 ml-10 ">₹</span> */}
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
          className="border p-1 ml-1 hover:cursor-pointer"
        >
          <option className="bg-black text-white hover:bg-black ">Food</option>
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
          className="   bg-blue-500 text-white p-2 ml-2  hover:bg-blue-700   rounded-3xl  hover:cursor-pointer  "
        >
          Add Expense
        </button>
        <a href="/expenselist" className="text-blue-600 hover:underline">Go to expenselist</a>
      </form>
    </div>
  );
}

export default ExpenseForm;
