import ExpenseForm from "../components/ExpenseForm";

import LogOut from "./LogOut";
function Dashboard() {

  return (
    <div>
      <div className="p-6 max-w-4xl mx-auto">
        <h1 className="flex justify-center text-4xl mb-7 font-serif sm:5xl">TrackEx</h1>
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold"> Hi User 👋</h1>

          <LogOut />
        </div>

        <ExpenseForm />
      </div>
    </div>
  );
}

export default Dashboard;
