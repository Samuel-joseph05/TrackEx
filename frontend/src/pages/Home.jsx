import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/login");
  };
  const handleSignup = () => {
    navigate("/register");
  };
  return (
    <>
      <div className=" p-6 bg-gradient-to-b from-[#73bf73] to-white">
        <h1 className="text-4xl sm:text-5xl text-center font-serif my-10 ">
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
            onClick={handleSignup}
          >
            SignUp
          </button>
        </div>
        <div>
          <h1 className="sm:text-3xl text-2xl text-center font-bold">
            Welcome to TrackEx !
          </h1>
          <p className="mt-5 ml-5 mr-5 mb-10 lg:text-center  text-black ">
            <span className="font-bold text-xl sm:hidden lg:hidden">
              TrackEx
            </span>
            <ul>
              <li className="mb-1 lg:mb-5 mt-2 text-2xl">
                –✅ Simple & Intuitive: Manage your personal finances
                effortlessly with an easy-to-use interface.
              </li>{" "}
              <li className="mb-1 lg:mb-5 text-2xl">
                🔒 Secure Access: Register and log in safely with built-in
                authentication.
              </li>
              <li className="mb-1 lg:mb-5 text-2xl">
                🧾 Add Expenses Easily: Record your spending with details like
                title, amount, category, and date.
              </li>{" "}
              <li className="mb-1 lg:mb-5 text-2xl">
                {" "}
                📋 View All Your Spending: Get a complete overview of your
                expenses in one organized list.
              </li>
              <li className="mb-1 lg:mb-5 text-2xl">
                {" "}
                🗑️ Stay Accurate: Delete old or incorrect expenses anytime to
                keep your records clean.
              </li>{" "}
              <li className="mb-1 text-2xl">
                📈 Take Control: Understand your spending habits and make better
                financial decisions.
              </li>
            </ul>
          </p>
        </div>
      </div>
    </>
  );
}

export default Home;
