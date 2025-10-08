import { useNavigate } from "react-router-dom";

function LogOut() {

    const navigate= useNavigate();


    const handleLogout = () => {
        localStorage.removeItem("token");// clear jwt token from local storage
        navigate("/"); 
    }
  return (
    <div>
       <button 
      onClick={handleLogout} 
      className="bg-red-500 text-white px-2 py-2 rounded-lg"
    >
      Logout
    </button>
    </div>
  )
}

export default LogOut;
