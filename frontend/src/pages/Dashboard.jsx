import ExpenseForm from "../components/ExpenseForm";

import LogOut from "./LogOut";
function Dashboard() {

  return (
 <div className="min-h-screen bg-gradient-to-br from-green-100 via-white to-green-50">

  {/* Navbar */}

  <nav className="bg-white shadow-sm">
    <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

      <h1 className="text-3xl font-bold text-green-700">
        TrackEx
      </h1>

      <LogOut />

    </div>
  </nav>

  {/* Dashboard */}

  <div className="max-w-7xl mx-auto px-6 py-10">

    {/* Welcome */}

    <div className="mb-10">
      <h2 className="text-4xl font-bold">
        Welcome back 👋
      </h2>

      <p className="text-gray-500 mt-2">
        Keep your spending under control.
      </p>
    </div>

    {/* Summary Cards */}

    <div className="grid md:grid-cols-3 gap-6 mb-10">

      <div className="bg-white rounded-2xl shadow-lg p-6">
        <p className="text-gray-500">Today's Expense</p>
        <h2 className="text-3xl font-bold text-red-500">
          ₹0
        </h2>
      </div>

      <div className="bg-white rounded-2xl shadow-lg p-6">
        <p className="text-gray-500">This Month</p>
        <h2 className="text-3xl font-bold text-green-600">
          ₹0
        </h2>
      </div>

      <div className="bg-white rounded-2xl shadow-lg p-6">
        <p className="text-gray-500">Total Expenses</p>
        <h2 className="text-3xl font-bold text-blue-600">
          0
        </h2>
      </div>

    </div>

    {/* Expense Form */}

    <div className="bg-white rounded-3xl shadow-xl p-6">
      <ExpenseForm />
    </div>

  </div>

</div>
  );
}

export default Dashboard;
