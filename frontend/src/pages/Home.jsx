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
     <div className="min-h-screen bg-gradient-to-br from-green-100 via-white to-green-50">

  {/* Hero Section */}
  <section className="max-w-6xl mx-auto px-6 py-16">

    <h1 className="text-5xl md:text-6xl font-bold text-center text-green-700">
      TrackEx
    </h1>

    <p className="text-center text-gray-600 text-lg mt-5 max-w-2xl mx-auto">
      Manage your income and expenses with a simple, secure, and modern
      expense tracking application.
    </p>

    <div className="flex justify-center gap-5 mt-10">
      <button
        onClick={handleLogin}
        className="px-8 py-3 rounded-xl bg-blue-600 text-white font-semibold shadow-lg hover:bg-blue-700 transition"
      >
        Login
      </button>

      <button
        onClick={handleSignup}
        className="px-8 py-3 rounded-xl bg-green-600 text-white font-semibold shadow-lg hover:bg-green-700 transition"
      >
        Sign Up
      </button>
    </div>

  </section>

  {/* Features */}

  <section className="max-w-6xl mx-auto px-6 pb-20">

    <h2 className="text-4xl font-bold text-center mb-12">
      Why Choose TrackEx?
    </h2>

    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

      <div className="bg-white rounded-2xl shadow-lg p-6 hover:-translate-y-2 transition">
        <div className="text-4xl mb-4">✅</div>
        <h3 className="text-xl font-bold mb-3">
          Simple Interface
        </h3>
        <p className="text-gray-600">
          Easily manage your personal finances with a clean and intuitive
          dashboard.
        </p>
      </div>

      <div className="bg-white rounded-2xl shadow-lg p-6 hover:-translate-y-2 transition">
        <div className="text-4xl mb-4">🔒</div>
        <h3 className="text-xl font-bold mb-3">
          Secure Login
        </h3>
        <p className="text-gray-600">
          Your account is protected using secure authentication.
        </p>
      </div>

      <div className="bg-white rounded-2xl shadow-lg p-6 hover:-translate-y-2 transition">
        <div className="text-4xl mb-4">🧾</div>
        <h3 className="text-xl font-bold mb-3">
          Add Expenses
        </h3>
        <p className="text-gray-600">
          Record expenses with title, amount, category and date in seconds.
        </p>
      </div>

      <div className="bg-white rounded-2xl shadow-lg p-6 hover:-translate-y-2 transition">
        <div className="text-4xl mb-4">📋</div>
        <h3 className="text-xl font-bold mb-3">
          Expense History
        </h3>
        <p className="text-gray-600">
          View all your spending in one organized place.
        </p>
      </div>

      <div className="bg-white rounded-2xl shadow-lg p-6 hover:-translate-y-2 transition">
        <div className="text-4xl mb-4">🗑️</div>
        <h3 className="text-xl font-bold mb-3">
          Delete Anytime
        </h3>
        <p className="text-gray-600">
          Remove outdated or incorrect expenses with one click.
        </p>
      </div>

      <div className="bg-white rounded-2xl shadow-lg p-6 hover:-translate-y-2 transition">
        <div className="text-4xl mb-4">📈</div>
        <h3 className="text-xl font-bold mb-3">
          Smart Insights
        </h3>
        <p className="text-gray-600">
          Understand your spending habits and make better financial decisions.
        </p>
      </div>

    </div>

  </section>

</div>
    </>
  );
}

export default Home;
