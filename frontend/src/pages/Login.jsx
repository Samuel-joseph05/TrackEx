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
        navigate("/dashboard"); // redirect to home
      } else {
        alert(res.data.message || "Login failed");
      }
    } catch (err) {
      console.error(err);
      alert("An error occurred during login");
    }
  };

  const handleback=()=>{
    window.history.back();
  }
  return (
   <div className="min-h-screen bg-gradient-to-br from-green-100 via-white to-green-50 flex items-center justify-center px-4">

  <form
    onSubmit={handleSubmit}
    className="w-full max-w-md bg-white rounded-3xl shadow-2xl p-8"
  >

    {/* Header */}

    <div className="text-center mb-8">
      <h1 className="text-4xl font-bold text-green-700">
        Welcome Back
      </h1>

      <p className="text-gray-500 mt-2">
        Sign in to continue managing your expenses.
      </p>
    </div>

    {/* Email */}

    <div className="mb-5">
      <label className="block mb-2 font-medium text-gray-700">
        Email
      </label>

      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        placeholder="Enter your email"
        className="w-full px-4 py-3 border border-gray-300 rounded-xl outline-none focus:ring-2 focus:ring-green-500 transition"
      />
    </div>

    {/* Password */}

    <div className="mb-6">
      <label className="block mb-2 font-medium text-gray-700">
        Password
      </label>

      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
        placeholder="Enter your password"
        className="w-full px-4 py-3 border border-gray-300 rounded-xl outline-none focus:ring-2 focus:ring-green-500 transition"
      />
    </div>

    {/* Login Button */}

    <button
      type="submit"
      className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 rounded-xl shadow-lg transition"
    >
      Sign In
    </button>

    {/* Divider */}

    <div className="flex items-center my-6">
      <div className="flex-1 border-t"></div>
      <span className="px-3 text-gray-400 text-sm">OR</span>
      <div className="flex-1 border-t"></div>
    </div>

    {/* Signup */}

    <button
      type="button"
      onClick={() => navigate("/register")}
      className="w-full border border-green-600 text-green-600 hover:bg-green-600 hover:text-white font-semibold py-3 rounded-xl transition"
    >
      Create New Account
    </button>

    {/* Back */}

    <div className="text-center mt-6">
      <button
        type="button"
        onClick={handleback}
        className="text-gray-500 hover:text-green-700 hover:underline"
      >
        ← Back to Home
      </button>
    </div>

  </form>

</div>
  );
}

export default Login;
