
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/login");
  };
  const handleSignIn = () => {
    navigate("/register");
  };
  return (
    <>
      <div className=" p-6 ">
        <h1 className="text-4xl sm:text-5xl text-center font-serif my-10">
          TrackEx
        </h1>
        <div className="flex justify-center gap-6 my-10 ">
          <button
            className="bg-blue-500 text-teal-50 py-2 px-4 rounded-2xl
         transition duration-300 ease-in hover:bg-blue-700"
            onClick={handleLogin}
          >
            LogIn
          </button>{" "}
          <p className="text-5xl">🤷‍♂️</p>
          <button
            className="bg-green-400 text-black py-2 px-4 rounded-2xl transition duration-300 ease-in hover:bg-green-600 hover:text-white"
            onClick={handleSignIn}
          >
            SignIn
          </button>
        </div>
        <div>
          <h1 className="sm:text-3xl text-2xl text-center font-bold">
            Welcome to TrackEx !
          </h1>
          <p className="mt-5 ml-5 mr-5 text-black ">
            <span className="font-bold text-xl">TrackEx</span> – Your Personal
            Expense Tracker TrackEx is a simple, intuitive web application that
            helps you manage your personal finances. With TrackEx, you can
            register and log in securely, add your expenses with details like
            title, amount, category, and date, and view a complete list of your
            spending. The app allows you to delete expenses, ensuring your
            records stay accurate and up-to-date. Designed with a clean
            interface, conditional authentication UI, and real-time error
            handling, TrackEx makes tracking your finances easy, efficient, and
            reliable. Stay on top of your spending habits and take control of
            your money with TrackEx.
          </p>
        </div>
      </div>
    </>
  );
}

export default Home;
