import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { API_URL } from "../config.js";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(`${API_URL}/login`, { email, password })
      .then((res) => {
          if(res.data.Login === true)// if login is true then only go to dashboard
        {
          navigate("/dashboard");
        }  
        else{
          navigate("/login");
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="flex justify-center  ">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-3  shadow-xl p-5 rounded-3xl w-100 m-15 "
      >
        <h1 className="text-2xl p-1">Login</h1>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          placeholder="Enter your gmail"
          className="p-2 bg-gray-100 rounded-2xl outline-none"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        required />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          placeholder="Enter your password "
          className="p-2 bg-gray-100 rounded-2xl outline-none"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
      required   />
        <p className="text-sm">Click Sign In to your Existing account...</p>
        <button
          className="text-white bg-purple-600 p-2  rounded-2xl transition duration-300 
              ease-in-out  hover:bg-purple-700 hover:text-white"
          type="submit"
        >
          Sign In
        </button>
        <p className="text-sm">don't have an account? Click Sign Up .</p>
        <button
          className="bg-gray-300 text-black p-2 rounded-2xl transition duration-300 
            ease-in-out  hover:bg-sky-400 hover:text-white"
        >
          Sign Up
        </button>
      </form>
    </div>
  );
}

export default Login;
