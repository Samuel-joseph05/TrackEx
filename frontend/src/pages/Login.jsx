import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { API_URL } from "../config.js";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        `${API_URL}/login`,
        { email, password },
        { withCredentials: true } // crucial for cookies
      );

      if (res.data.login === true) {
        navigate("/"); // redirect to ExpenseForm
      } else {
        alert(res.data.message || "Login failed");
      }
    } catch (err) {
      console.error(err);
      alert("An error occurred during login");
    }
  };

  return (
    <div className="flex justify-center">
      <form onSubmit={handleSubmit} className="flex flex-col gap-3 p-5 shadow-xl rounded-3xl w-96">
        <h1 className="text-2xl">Login</h1>
        <label>Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="p-2 rounded-xl bg-gray-100 outline-none"
        />
        <label>Password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className="p-2 rounded-xl bg-gray-100 outline-none"
        />
        <button type="submit" className="bg-purple-600 text-white p-2 rounded-xl hover:bg-purple-700">
          Sign In
        </button>
        <button
          type="button"
          onClick={() => navigate("/register")}
          className="bg-gray-300 text-black p-2 rounded-xl hover:bg-sky-400"
        >
          Sign Up
        </button>
      </form>
    </div>
  );
}

export default Login;
