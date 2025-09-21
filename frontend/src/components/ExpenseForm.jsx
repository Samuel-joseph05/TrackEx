
import { useNavigate } from "react-router-dom";

function ExpenseForm() {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/login");
  };
  const handlesignUp =() =>{
navigate("/register")
  }
  return (
    <div className=""> 
     <h1 className="text-center text-3xl"  >TrackEx</h1>
      <div className="flex  gap-3   rounded-3xl  mx-3 my-3">
         <h1 className="text-2xl flex justify-center sm:"> ExpenseForm</h1>
        <button onClick={handleLogin} className="bg-red-600 rounded-sm px-4 ">Login </button>
        
        <button onClick={handlesignUp} className="bg-blue-600 rounded-2xl p-2 mx-3">signUp </button>
      </div>
      <form className="flex flex-col gap-3  shadow-xl p-5 rounded-3xl w-100 m-10 ">
        <label htmlFor="title">Title : </label>
        <input name="title" placeholder="Title" required className="" /><br></br>
        <label htmlFor="amount">Amount : </label>
        <input name="amount" type="number" placeholder="Amount" required /><br></br>
        <label htmlFor="Category">Category : </label>
        <input name="Category" placeholder="shopping,food,gym" required /><br></br>
        <label htmlFor="date">Date :</label>
        <input name="date" type="date" required /><br></br>
        <button type="submit" className="    bg-green-500  hover:bg-blue-700  text-white rounded-3xl px-1 py-1   ">
          Add Expense
        </button>
      </form>
      
    </div>
  );
}

export default ExpenseForm;
