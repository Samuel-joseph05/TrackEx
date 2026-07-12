import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { API_URL } from "../config.js";

function Register() 

{
const[name,setName]=useState("")
 const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const navigate= useNavigate();

const handleSubmit =async(e)=>{
  e.preventDefault();// Prevent page reload
  try {
    const res = await axios.post(`${API_URL}/register`, { name, email, password },{withCredentials:true});
    console.log(res.data); // log response
    navigate("/login"); // Navigate to the expenses form page after successful registration
  }
  catch (err) {
      console.error(err);
      alert("An error occurred during registration. Please try again.");
    }
}
 const handleLogin = () => {
    navigate("/login");
  };
  return (
    <>
       <div className="min-h-screen bg-gradient-to-br from-green-100 via-white to-green-50 flex items-center justify-center px-5">

  <form
    onSubmit={handleSubmit}
    className="w-full max-w-md bg-white rounded-3xl shadow-2xl p-8"
  >
    {/* Heading */}

    <div className="text-center mb-8">
      <h1 className="text-4xl font-bold text-green-700">
        Create Account
      </h1>

      <p className="text-gray-500 mt-2">
        Join TrackEx and start tracking your expenses.
      </p>
    </div>

    {/* Name */}

    <div className="mb-5">
      <label className="block mb-2 font-medium text-gray-700">
        Full Name
      </label>

      <input
        type="text"
        placeholder="Enter your full name"
        className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition"
        onChange={(e) => setName(e.target.value)}
        required
      />
    </div>

    {/* Email */}

    <div className="mb-5">
      <label className="block mb-2 font-medium text-gray-700">
        Email
      </label>

      <input
        type="email"
        placeholder="Enter your email"
        className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition"
        onChange={(e) => setEmail(e.target.value)}
        required
      />
    </div>

    {/* Password */}

    <div className="mb-6">
      <label className="block mb-2 font-medium text-gray-700">
        Password
      </label>

      <input
        type="password"
        placeholder="Create a password"
        className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition"
        onChange={(e) => setPassword(e.target.value)}
        required
      />
    </div>

    {/* Signup */}

    <button
      type="submit"
      className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 rounded-xl transition shadow-lg"
    >
      Create Account
    </button>

    {/* Divider */}

    <div className="flex items-center my-6">
      <div className="flex-1 border-t"></div>
      <span className="px-3 text-gray-400 text-sm">OR</span>
      <div className="flex-1 border-t"></div>
    </div>

    {/* Login */}

    <button
      type="button"
      onClick={handleLogin}
      className="w-full border border-green-600 text-green-600 hover:bg-green-600 hover:text-white font-semibold py-3 rounded-xl transition"
    >
      Login Instead
    </button>

    {/* Home */}

    <div className="text-center mt-6">
      <a
        href="/"
        className="text-gray-500 hover:text-green-700 hover:underline"
      >
        ← Back to Home
      </a>
    </div>

  </form>

</div>
    </>
  )
}

export default Register;
