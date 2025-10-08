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
    navigate("/login");
  }
  catch (err) {
      console.error(err);
      alert("An error occurred during login");
    }
}
 const handleLogin = () => {
    navigate("/login");
  };
  return (
    <>
        <div className="flex justify-center  ">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-3  shadow-xl p-8 rounded-3xl w-100 m-15 "
        >
          <h1 className="text-2xl p-1">Register</h1>
          <label htmlFor="username">Name</label>
          <input
            type="text"
            placeholder="Enter your name"
            className="p-2 bg-gray-100 rounded-2xl outline-none"
            onChange={(e) => {
              setName(e.target.value);
           }}
         required ></input>

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
            required />
          <p className="text-sm">
            New here?
            <br></br> Click SignUp to create your account.
          </p>
          <button
            className="text-white bg-purple-600 p-2  rounded-2xl transition duration-300 
              ease-in-out  hover:bg-purple-700 hover:text-white"
            type="submit"
          >
            SignUp
          </button>
          <p className="">
            Already have an account? Click login to  SignIn.
          </p>
          <button
            className="bg-gray-300 text-black p-2 rounded-2xl transition duration-300 
            ease-in-out  hover:bg-sky-400 hover:text-white" onClick={handleLogin}
          >
            Login
          </button>
           <div>
         <a href="/" className="hover:underline">back to Home</a>
        </div>
        </form>
       
      </div>
    </>
  )
}

export default Register;
